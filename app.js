"use strict";

const DEFAULT_CONFIG = {
  passengers: 2,
  ...FlightRules.scope,
  destinations: ["BKK", "HKT"],
  takePrice: 175000,
  watchPrice: 200000,
  directMoscowTakePrice: 250000,
  directMoscowWatchPrice: 300000,
  checkIntervalHours: 6,
  currency: "RUB",
  timezone: "Europe/Moscow",
  maxTravelHours: 70,
  maxInternationalStops: 1,
};

const state = {
  config: { ...DEFAULT_CONFIG },
  records: [],
  period: "7d",
  airports: new Set(DEFAULT_CONFIG.airports),
  maxTravelHours: 70,
  route: "all",
  journalSearch: "",
  mobileRowsLimit: 20,
  sourceLabel: "flight-checks.js",
  events: [],
  discoveryRuns: [],
};

const els = {};
let toastTimer;
let chartFrame;
const chartHits = { trend: [], airport: [] };

document.addEventListener("DOMContentLoaded", init);

async function init() {
  cacheElements();
  setupTheme();
  bindEvents();
  renderAirportFilters();
  await loadData();
  registerServiceWorker();
  window.addEventListener("resize", () => queueCharts());
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

function cacheElements() {
  const ids = [
    "theme-toggle", "theme-label", "freshness", "json-file", "reload-data",
    "period-filter", "airport-filter", "duration-filter", "route-filter", "reset-filters", "mobile-filter-toggle", "filters-body",
    "kpi-current", "kpi-current-note", "kpi-current-link", "kpi-route", "kpi-route-note", "scope-note", "selected-airports",
    "discovery-counts", "discovery-events", "discovery-updated",
    "kpi-seven", "kpi-seven-note", "kpi-signal", "kpi-signal-note", "signal-card",
    "trend-chart", "trend-tooltip", "trend-empty", "trend-summary", "airport-chart", "airport-tooltip", "airport-empty",
    "route-summary", "route-count", "journal-search", "journal-body", "journal-empty",
    "journal-cards", "journal-more", "row-count", "export-csv", "data-source-label",
  ];
  ids.forEach((id) => { els[toCamel(id)] = document.getElementById(id); });
}

function toCamel(value) {
  return value.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

function setupTheme() {
  syncThemeControl();
  els.themeToggle.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("flight-tracker-theme", next);
    syncThemeControl();
    queueCharts();
  });

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener?.("change", (event) => {
    if (localStorage.getItem("flight-tracker-theme")) return;
    document.documentElement.dataset.theme = event.matches ? "dark" : "light";
    syncThemeControl();
    queueCharts();
  });
}

function syncThemeControl() {
  const dark = document.documentElement.dataset.theme === "dark";
  els.themeToggle.setAttribute("aria-pressed", String(dark));
  els.themeLabel.textContent = dark ? "Тёмная" : "Светлая";
}

function bindEvents() {
  els.periodFilter.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-period]");
    if (!button) return;
    state.period = button.dataset.period;
    [...els.periodFilter.querySelectorAll("button")].forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });

  els.airportFilter.addEventListener("change", (event) => {
    const checkbox = event.target.closest("input[data-airport]");
    if (!checkbox) return;
    const code = checkbox.dataset.airport;
    if (checkbox.checked) state.airports.add(code);
    else state.airports.delete(code);
    state.mobileRowsLimit = 20;
    render();
  });

  els.routeFilter.addEventListener("change", () => {
    state.route = els.routeFilter.value;
    render();
  });

  els.durationFilter.addEventListener("change", () => {
    state.maxTravelHours = Number(els.durationFilter.value) || 70;
    state.mobileRowsLimit = 20;
    render();
  });

  els.resetFilters.addEventListener("click", () => {
    state.period = "7d";
    state.route = "all";
    state.airports = new Set(state.config.airports);
    state.maxTravelHours = 70;
    els.journalSearch.value = "";
    state.journalSearch = "";
    state.mobileRowsLimit = 20;
    [...els.periodFilter.querySelectorAll("button")].forEach((button) => button.classList.toggle("is-active", button.dataset.period === "7d"));
    els.routeFilter.value = "all";
    els.durationFilter.value = "70";
    renderAirportFilters();
    render();
  });

  els.journalSearch.addEventListener("input", () => {
    state.journalSearch = els.journalSearch.value.trim().toLocaleLowerCase("ru");
    state.mobileRowsLimit = 20;
    renderJournal(getVisibleRecords());
  });

  els.mobileFilterToggle.addEventListener("click", () => {
    const filters = els.mobileFilterToggle.closest(".filters");
    const open = filters.classList.toggle("is-open");
    els.mobileFilterToggle.setAttribute("aria-expanded", String(open));
  });

  els.journalMore.addEventListener("click", () => {
    state.mobileRowsLimit += 20;
    renderJournal(getVisibleRecords());
  });

  els.reloadData.addEventListener("click", () => location.reload());
  els.jsonFile.addEventListener("change", loadSelectedFile);
  els.exportCsv.addEventListener("click", exportCsv);
  bindChartInteraction(els.trendChart, els.trendTooltip, "trend");
  bindChartInteraction(els.airportChart, els.airportTooltip, "airport");
}

function bindChartInteraction(canvas, tooltip, kind) {
  canvas.addEventListener("click", (event) => showChartPrice(event, canvas, tooltip, kind));
  canvas.addEventListener("keydown", (event) => {
    if (!["Enter", " ", "ArrowLeft", "ArrowRight"].includes(event.key) || !chartHits[kind].length) return;
    event.preventDefault();
    const current = Number(canvas.dataset.activeHit || -1);
    const direction = event.key === "ArrowLeft" ? -1 : 1;
    const next = (current + direction + chartHits[kind].length) % chartHits[kind].length;
    canvas.dataset.activeHit = String(next);
    revealChartPrice(chartHits[kind][next], canvas, tooltip);
  });
}

function showChartPrice(event, canvas, tooltip, kind) {
  if (!chartHits[kind].length) return;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const hit = kind === "airport"
    ? chartHits.airport.find((item) => x >= item.x - 8 && x <= item.x + item.width + 8 && y >= item.y - 18 && y <= item.y + item.height + 8)
    : chartHits.trend.reduce((best, item) => !best || Math.hypot(x - item.x, y - item.y) < Math.hypot(x - best.x, y - best.y) ? item : best, null);
  if (!hit || (kind === "trend" && Math.abs(x - hit.x) > 36)) return;
  canvas.dataset.activeHit = String(chartHits[kind].indexOf(hit));
  revealChartPrice(hit, canvas, tooltip);
}

function revealChartPrice(hit, canvas, tooltip) {
  const wrapWidth = canvas.parentElement.clientWidth;
  tooltip.innerHTML = hit.tooltip;
  tooltip.hidden = false;
  tooltip.style.left = `${Math.max(62, Math.min(wrapWidth - 62, hit.anchorX ?? hit.x))}px`;
  tooltip.style.top = `${Math.max(52, hit.anchorY ?? hit.y)}px`;
}

function renderAirportFilters() {
  const names = { KZN: "Казань", MOW: "Москва", NBC: "Нижнекамск · Бегишево" };
  els.airportFilter.innerHTML = state.config.airports.map((code) => `
    <label class="airport-option">
      <input type="checkbox" data-airport="${escapeHtml(code)}" ${state.airports.has(code) ? "checked" : ""}>
      <span>${names[code]} <b>${escapeHtml(code)}</b></span>
    </label>
  `).join("");
}

async function loadData() {
  els.reloadData.disabled = true;
  els.reloadData.setAttribute("aria-busy", "true");
  try {
    const params = new URLSearchParams(location.search);
    if (params.get("demo") === "1") {
      applyData(createDemoData(), "демо-данные");
      showToast("Загружен демонстрационный набор");
      return;
    }
    if (!window.FLIGHT_TRACKER_DATA) throw new Error("Data file is unavailable");
    applyData(window.FLIGHT_TRACKER_DATA, "flight-checks.js");
  } catch (error) {
    applyData({ config: DEFAULT_CONFIG, checks: [] }, "встроенная пустая схема");
    showToast("Не удалось прочитать файл данных — показан пустой трекер");
  } finally {
    els.reloadData.disabled = false;
    els.reloadData.removeAttribute("aria-busy");
  }
}

async function loadSelectedFile(event) {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    applyData(data, file.name);
    showToast(`Загружен ${file.name}`);
  } catch {
    showToast("Не удалось прочитать JSON: проверьте формат файла");
  } finally {
    event.target.value = "";
  }
}

function applyData(data, sourceLabel) {
  state.config = { ...DEFAULT_CONFIG, ...(data.config || {}), ...FlightRules.scope, maxTravelHours: 70 };
  state.records = deriveRecords(Array.isArray(data.checks) ? data.checks : [], state.config);
  state.events = Array.isArray(data.events) ? data.events : [];
  state.discoveryRuns = Array.isArray(data.discoveryRuns) ? data.discoveryRuns : [];
  state.airports = new Set(state.config.airports);
  state.maxTravelHours = 70;
  els.durationFilter.value = "70";
  state.route = "all";
  state.sourceLabel = sourceLabel;
  els.dataSourceLabel.textContent = `Источник данных: ${sourceLabel}`;
  renderAirportFilters();
  buildRouteOptions();
  render();
}

function deriveRecords(rawChecks, config) {
  const normalized = rawChecks
    .map((raw, index) => normalizeRecord(raw, index, config))
    .filter(Boolean)
    .sort((a, b) => a.timestampMs - b.timestampMs);

  const timestampMin = new Map();
  normalized.forEach((record) => {
    const key = record.timestamp;
    timestampMin.set(key, Math.min(timestampMin.get(key) ?? Infinity, record.totalPrice));
  });

  normalized.forEach((record) => {
    record.pricePerPerson = record.totalPrice / config.passengers;
    record.bestFlag = record.totalPrice === timestampMin.get(record.timestamp);
    record.delta24h = historicalDelta(normalized, record, 24);
    record.delta7d = historicalDelta(normalized, record, 24 * 7);
    const sevenDaysAgo = record.timestampMs - 7 * 86400000;
    const sameTrip = normalized.filter((item) => item.tripKey === record.tripKey && item.timestampMs >= sevenDaysAgo && item.timestampMs <= record.timestampMs);
    record.min7d = sameTrip.length ? Math.min(...sameTrip.map((item) => item.totalPrice)) : record.totalPrice;
    record.status = getStatus(record, config);
  });
  return normalized;
}

function normalizeRecord(raw, index, config) {
  const timestampMs = Date.parse(raw.timestamp);
  const totalPrice = Number(raw.totalPrice);
  if (!Number.isFinite(timestampMs) || !Number.isFinite(totalPrice) || totalPrice <= 0) return null;
  const origin = String(raw.origin || "").toUpperCase();
  const route = String(raw.route || "").trim();
  const departureDate = String(raw.departureDate || "");
  const returnDate = String(raw.returnDate || "");
  const airline = String(raw.airline || "Не указана").trim();
  return {
    ...raw,
    id: raw.id || `check-${index + 1}`,
    timestamp: new Date(timestampMs).toISOString(),
    timestampMs,
    origin,
    route,
    departureDate,
    returnDate,
    homeArrivalDate: String(raw.homeArrivalDate || ""),
    airline,
    stops: raw.stops ?? "Не указано",
    travelTimeHours: Number.isFinite(Number(raw.travelTimeHours)) ? Number(raw.travelTimeHours) : null,
    baggage: String(raw.baggage || "Не проверено"),
    totalPrice,
    payment: String(raw.payment || "Не проверено"),
    source: String(raw.source || ""),
    note: String(raw.note || ""),
    routeKey: `${route}|${departureDate}|${returnDate}|${airline}`,
    tripKey: `${route}|${departureDate}|${returnDate}`,
    config,
  };
}

function historicalDelta(records, current, hours) {
  const target = current.timestampMs - hours * 3600000;
  const candidates = records.filter((item) => item.routeKey === current.routeKey && item.timestampMs <= target);
  if (!candidates.length) return null;
  const latestTimestamp = Math.max(...candidates.map((item) => item.timestampMs));
  const historicalPrice = Math.min(...candidates.filter((item) => item.timestampMs === latestTimestamp).map((item) => item.totalPrice));
  return current.totalPrice - historicalPrice;
}

function getStatus(recordOrPrice, config) {
  const record = typeof recordOrPrice === "object" ? recordOrPrice : null;
  if (record) return FlightRules.decision(record, config).status;
  const price = Number(record ? record.totalPrice : recordOrPrice);
  const directMoscow = record?.origin === "MOW" && Number(record.stops) === 0;
  const takePrice = directMoscow ? config.directMoscowTakePrice : config.takePrice;
  const watchPrice = directMoscow ? config.directMoscowWatchPrice : config.watchPrice;
  if (price <= takePrice) return "take";
  if (price <= watchPrice) return "watch";
  return "expensive";
}

function buildRouteOptions() {
  const routes = [...new Set(state.records.filter((r) => state.airports.has(r.origin) && FlightRules.eligibility(r) !== "excluded" && isWithinDuration(r)).map((record) => record.route).filter(Boolean))].sort((a, b) => a.localeCompare(b, "ru"));
  if (!routes.includes(state.route)) state.route = "all";
  els.routeFilter.innerHTML = `<option value="all">Все маршруты</option>${routes.map((route) => `<option value="${escapeHtml(route)}">${escapeHtml(route)}</option>`).join("")}`;
  els.routeFilter.value = state.route;
}

function render() {
  buildRouteOptions();
  const scoped = getScopedRecords();
  const bestAt = new Map();
  scoped.forEach((r) => bestAt.set(r.timestamp, Math.min(bestAt.get(r.timestamp) ?? Infinity, r.totalPrice)));
  scoped.forEach((r) => { r.bestFlag = r.totalPrice === bestAt.get(r.timestamp); r.status = getStatus(r, state.config); });
  setText(els.selectedAirports, [...state.airports].join(" · ") || "Не выбраны");
  setText(els.scopeNote, !state.airports.size ? "Выберите хотя бы один аэропорт, чтобы увидеть результаты."
    : scoped.some((r) => FlightRules.eligibility(r) === "pending") ? `Показаны варианты до ${state.maxTravelHours} ч. В истории есть цены без подтверждённого возвращения домой — это не рекомендация к покупке.`
    : `Все показатели ниже учитывают выбранные аэропорты и перелёты до ${state.maxTravelHours} ч. Обратно — дата, когда вы уже дома.`);
  const visible = applyPeriod(scoped);
  renderFreshness();
  renderKpis(scoped);
  renderRouteSummary(visible);
  renderJournal(visible);
  renderDiscovery();
  queueCharts(visible, scoped);
}

function getScopedRecords() {
  return state.records.filter((record) => FlightRules.eligibility(record) !== "excluded" && state.airports.has(record.origin) && isWithinDuration(record) && (state.route === "all" || record.route === state.route));
}

function isWithinDuration(record) {
  return Number.isFinite(record.travelTimeHours) && record.travelTimeHours > 0 && record.travelTimeHours <= state.maxTravelHours;
}

function applyPeriod(records) {
  if (state.period === "all" || !records.length) return [...records];
  const latest = Date.now();
  const span = state.period === "24h" ? 86400000 : 7 * 86400000;
  return records.filter((record) => record.timestampMs >= latest - span);
}

function getVisibleRecords() {
  return applyPeriod(getScopedRecords());
}

function renderFreshness() {
  const records = getScopedRecords();
  const latest = records.length ? Math.max(...records.map((record) => record.timestampMs)) : null;
  els.freshness.classList.remove("is-fresh", "is-stale");
  if (!latest) {
    els.freshness.querySelector("span:last-child").textContent = "Ожидаем первую проверку";
    return;
  }
  const ageHours = Math.max(0, (Date.now() - latest) / 3600000);
  els.freshness.classList.add(ageHours <= state.config.checkIntervalHours * 1.5 ? "is-fresh" : "is-stale");
  els.freshness.querySelector("span:last-child").textContent = `Проверено ${formatRelative(latest)}`;
}

function renderKpis(records) {
  els.kpiCurrentLink.innerHTML = "";
  if (!records.length) {
    setText(els.kpiCurrent, "—");
    setText(els.kpiCurrentNote, "Нет данных");
    setText(els.kpiRoute, "—");
    setText(els.kpiRouteNote, "Нет данных");
    setText(els.kpiSeven, "—");
    setText(els.kpiSevenNote, "Нет данных");
    setText(els.kpiSignal, "НЕТ ДАННЫХ");
    setText(els.kpiSignalNote, `Интервал проверки: ${state.config.checkIntervalHours} ч`);
    els.signalCard.dataset.signal = "none";
    return;
  }

  const latestTimestamp = Math.max(...records.map((record) => record.timestampMs));
  const currentRows = records.filter((record) => record.timestampMs === latestTimestamp);
  const best = currentRows.reduce((winner, record) => !winner || record.totalPrice < winner.totalPrice ? record : winner, null);
  const sevenRows = records.filter((record) => record.timestampMs >= Date.now() - 7 * 86400000);
  const minSeven = sevenRows.length ? Math.min(...sevenRows.map((record) => record.totalPrice)) : null;
  const status = getStatus(best, state.config);

  setText(els.kpiCurrent, formatCurrency(best.totalPrice));
  setText(els.kpiCurrentNote, `${best.airline} · ${journeySummary(best)} · ${formatDateTime(latestTimestamp)}${FlightRules.eligibility(best) === "pending" ? " · домой: уточнить" : ""}`);
  els.kpiCurrentLink.innerHTML = offerLink(best);
  setText(els.kpiRoute, best.route || "Маршрут не указан");
  setText(els.kpiRouteNote, `${tripDates(best)} · ${journeySummary(best)}`);
  setText(els.kpiSeven, formatCurrency(minSeven));
  setText(els.kpiSevenNote, minSeven === null ? "За последние 7 дней проверок нет" : minSeven === best.totalPrice ? "Последняя цена — минимум недели" : `Последняя выше на ${formatCurrency(best.totalPrice - minSeven)}`);
  setText(els.kpiSignal, statusLabel(status));
  setText(els.kpiSignalNote, signalNote(best, status));
  els.signalCard.dataset.signal = status;
}

function signalNote(record, status) {
  const decision = FlightRules.decision(record, state.config);
  if (!decision.fresh) return "Цена старше 6 часов — проверьте у продавца";
  if (status === "unavailable") return "Предложение не доступно по последней проверке";
  if (decision.missing.length) return `Уточнить: ${decision.missing.join(", ")}`;
  const directMoscow = record.origin === "MOW" && Number(record.stops) === 0;
  const takePrice = directMoscow ? state.config.directMoscowTakePrice : state.config.takePrice;
  const watchPrice = directMoscow ? state.config.directMoscowWatchPrice : state.config.watchPrice;
  const prefix = directMoscow ? "Прямой из Москвы · " : "";
  if (status === "take") return `${prefix}ниже порога на ${formatCurrency(takePrice - record.totalPrice)}`;
  if (status === "watch") return `${prefix}до порога «брать»: ${formatCurrency(record.totalPrice - takePrice)}`;
  return `${prefix}выше зоны наблюдения на ${formatCurrency(record.totalPrice - watchPrice)}`;
}

function renderRouteSummary(records) {
  const groups = groupBy(records, (record) => record.tripKey);
  const summaries = [...groups.values()].map((items) => {
    const latest = Math.max(...items.map((item) => item.timestampMs));
    const current = items.filter((item) => item.timestampMs === latest).reduce((best, item) => !best || item.totalPrice < best.totalPrice ? item : best, null);
    const min = Math.min(...items.map((item) => item.totalPrice));
    return { current, min, count: items.length };
  }).sort((a, b) => a.current.totalPrice - b.current.totalPrice);

  els.routeCount.textContent = pluralize(summaries.length, ["маршрут", "маршрута", "маршрутов"]);
  if (!summaries.length) {
    els.routeSummary.innerHTML = `<div class="empty-state"><span class="empty-state__icon" aria-hidden="true">⌁</span><strong>Нет накопленной истории</strong><p>После проверок здесь появятся лучшие цены по маршрутам и датам.</p></div>`;
    return;
  }

  els.routeSummary.innerHTML = summaries.map(({ current, min, count }) => `
    <article class="route-card">
      <div class="route-card__top">
        <div>
          <h3>${escapeHtml(current.route)}</h3>
          <p class="route-card__dates">${escapeHtml(tripDates(current))} · ${count} набл.</p>
        </div>
        <span class="route-card__price">${formatCurrency(current.totalPrice)}</span>
      </div>
      <div class="route-card__metrics">
        <span>Пересадки <b>${escapeHtml(formatStops(current.stops))}</b></span>
        <span>В пути <b>${formatDuration(current.travelTimeHours)}</b></span>
        <span>Мин. периода <b>${formatCurrency(min)}</b></span>
        <span>Δ 24 часа <b class="${deltaClass(current.delta24h)}">${formatDelta(current.delta24h)}</b></span>
      </div>
      <div class="offer-row">${offerLink(current)}<span>${escapeHtml(statusLabel(current.status))}</span></div>
    </article>
  `).join("");
}

function renderJournal(records) {
  const query = state.journalSearch;
  const filtered = records.filter((record) => {
    if (!query) return true;
    return [record.route, record.airline, record.origin, record.payment, record.baggage, record.departureDate, record.returnDate]
      .join(" ").toLocaleLowerCase("ru").includes(query);
  }).sort((a, b) => b.timestampMs - a.timestampMs);

  els.journalBody.innerHTML = filtered.map((record) => `
    <tr>
      <td>${formatDateTime(record.timestampMs)}</td>
      <td class="route-cell"><strong>${escapeHtml(record.route)}</strong><span>${escapeHtml(tripDates(record))}</span></td>
      <td>${escapeHtml(record.airline)}</td>
      <td>${escapeHtml(formatStops(record.stops))}</td>
      <td>${formatDuration(record.travelTimeHours)}</td>
      <td>${escapeHtml(record.baggage)}</td>
      <td class="is-number"><strong>${formatCurrency(record.totalPrice)}</strong></td>
      <td class="is-number">${formatCurrency(record.pricePerPerson)}</td>
      <td>${escapeHtml(record.payment)}</td>
      <td>${offerLink(record)}</td>
      <td>${record.bestFlag ? '<span class="badge badge--best">BEST</span>' : '<span class="badge badge--muted">—</span>'}</td>
      <td class="is-number ${deltaClass(record.delta24h)}">${formatDelta(record.delta24h)}</td>
      <td class="is-number ${deltaClass(record.delta7d)}">${formatDelta(record.delta7d)}</td>
      <td class="is-number">${formatCurrency(record.min7d)}</td>
      <td><span class="badge badge--${record.status}">${statusLabel(record.status)}</span></td>
    </tr>
  `).join("");

  const mobileRows = filtered.slice(0, state.mobileRowsLimit);
  els.journalCards.innerHTML = mobileRows.length ? mobileRows.map((record) => `
    <article class="journal-card">
      <div class="journal-card__head">
        <time datetime="${escapeHtml(record.timestamp)}">${formatDateTime(record.timestampMs)}</time>
        <span class="badge badge--${record.status}">${statusLabel(record.status)}</span>
      </div>
      <div class="journal-card__route">
        <div>
          <h3>${escapeHtml(record.route)}</h3>
          <p>${escapeHtml(tripDates(record))} · ${escapeHtml(record.airline)}</p>
        </div>
        <div class="journal-card__price">
          <strong>${formatCurrency(record.totalPrice)}</strong>
          <small>${formatCurrency(record.pricePerPerson)} / чел.</small>
        </div>
      </div>
      <div class="journal-card__facts">
        <span>Пересадки и время <b>${escapeHtml(formatStops(record.stops))} · ${formatDuration(record.travelTimeHours)}</b></span>
        <span>Багаж <b>${escapeHtml(record.baggage)}</b></span>
        <span>Изменение за 24 ч <b class="${deltaClass(record.delta24h)}">${formatDelta(record.delta24h)}</b></span>
        <span>Минимум за 7 дней <b>${formatCurrency(record.min7d)}</b></span>
      </div>
      <div class="journal-card__footer">
        <span><b>Оплата:</b> ${escapeHtml(record.payment)} ${record.bestFlag ? '<i class="badge badge--best">BEST</i>' : ""}</span>
        ${offerLink(record)}
      </div>
    </article>
  `).join("") : `<div class="table-empty is-visible"><strong>Журнал пока пуст</strong><span>Первая карточка появится после очередной проверки цен.</span></div>`;

  els.journalEmpty.classList.toggle("is-visible", filtered.length === 0);
  els.journalMore.hidden = mobileRows.length >= filtered.length;
  els.rowCount.textContent = pluralize(filtered.length, ["запись", "записи", "записей"]);
}

function queueCharts(visible = getVisibleRecords(), scoped = getScopedRecords()) {
  cancelAnimationFrame(chartFrame);
  chartFrame = requestAnimationFrame(() => {
    drawTrendChart(visible);
    drawAirportChart(scoped);
  });
}

function drawTrendChart(records) {
  const grouped = groupBy(records, (record) => record.timestamp);
  const points = [...grouped.values()].map((items) => {
    const best = items.reduce((winner, item) => !winner || item.totalPrice < winner.totalPrice ? item : winner, null);
    return { x: best.timestampMs, y: best.totalPrice, record: best };
  }).sort((a, b) => a.x - b.x);

  els.trendEmpty.hidden = points.length > 0;
  const chart = prepareCanvas(els.trendChart);
  if (!chart) return;
  const { ctx, width, height } = chart;
  const pad = { left: 66, right: 18, top: 34, bottom: 38 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const values = points.map((point) => point.y).concat(state.config.takePrice);
  let minY = Math.floor(Math.min(...values, state.config.takePrice) * 0.94 / 10000) * 10000;
  let maxY = Math.ceil(Math.max(...values, state.config.takePrice) * 1.06 / 10000) * 10000;
  if (minY === maxY) { minY -= 10000; maxY += 10000; }
  drawGrid(ctx, pad, plotW, plotH, minY, maxY);

  const thresholdY = yScale(state.config.takePrice, minY, maxY, pad.top, plotH);
  ctx.save();
  ctx.strokeStyle = css("--accent");
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(pad.left, thresholdY);
  ctx.lineTo(pad.left + plotW, thresholdY);
  ctx.stroke();
  ctx.restore();

  if (!points.length) {
    chartHits.trend = [];
    els.trendTooltip.hidden = true;
    els.trendSummary.textContent = `Порог покупки: ${formatCurrency(state.config.takePrice)} за двоих`;
    return;
  }

  const minX = points[0].x;
  const maxX = points.at(-1).x;
  const coords = points.map((point, index) => ({
    x: minX === maxX ? pad.left + plotW / 2 : pad.left + ((point.x - minX) / (maxX - minX)) * plotW,
    y: yScale(point.y, minY, maxY, pad.top, plotH),
    value: point,
    index,
  }));

  const gradient = ctx.createLinearGradient(0, pad.top, 0, pad.top + plotH);
  gradient.addColorStop(0, css("--chart-fill"));
  gradient.addColorStop(1, "transparent");
  ctx.beginPath();
  ctx.moveTo(coords[0].x, pad.top + plotH);
  coords.forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.lineTo(coords.at(-1).x, pad.top + plotH);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  coords.forEach((point, index) => index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y));
  ctx.strokeStyle = css("--chart-line");
  ctx.lineWidth = 2.8;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  if (coords.length <= 32) {
    coords.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = css("--surface");
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = css("--chart-line");
      ctx.stroke();
    });
  }

  coords.forEach((point, index) => {
    const placeBelow = index % 2 === 1 || point.y < pad.top + 24;
    drawValueLabel(ctx, formatCurrency(point.value.y), point.x, point.y, placeBelow, width);
  });
  chartHits.trend = coords.map((point) => ({
    x: point.x,
    y: point.y,
    anchorX: point.x,
    anchorY: point.y,
    tooltip: `${escapeHtml(formatChartDate(point.value.x))}<br>${escapeHtml(point.value.record.route)}<br>${escapeHtml(journeySummary(point.value.record))}<br><b>${escapeHtml(formatCurrency(point.value.y))}</b> за двоих`,
  }));

  drawTimeLabels(ctx, points, pad, plotW, height);
  const change = points.at(-1).y - points[0].y;
  els.trendSummary.innerHTML = `За выбранный период: <b class="${deltaClass(change)}">${formatDelta(change)}</b> · последняя лучшая цена ${formatCurrency(points.at(-1).y)}`;
  els.trendChart.setAttribute("aria-label", `Динамика цены: ${points.length} точек, последняя цена ${formatCurrency(points.at(-1).y)}`);
}

function drawAirportChart(records) {
  const data = state.config.airports.filter((airport) => state.airports.has(airport)).map((airport) => {
    const items = records.filter((record) => record.origin === airport);
    if (!items.length) return { airport, current: null, min7: null };
    const latest = Math.max(...items.map((item) => item.timestampMs));
    const currentItems = items.filter((item) => item.timestampMs === latest);
    const currentRecord = currentItems.reduce((best, item) => !best || item.totalPrice < best.totalPrice ? item : best, null);
    const min7Items = items.filter((item) => item.timestampMs >= Date.now() - 7 * 86400000);
    const min7Record = min7Items.reduce((best, item) => !best || item.totalPrice < best.totalPrice ? item : best, null);
    return { airport, current: currentRecord.totalPrice, min7: min7Record?.totalPrice ?? null, currentRecord, min7Record };
  });
  const hasData = data.some((item) => item.current !== null);
  els.airportEmpty.hidden = hasData;
  const chart = prepareCanvas(els.airportChart);
  if (!chart) return;
  const { ctx, width, height } = chart;
  const pad = { left: 58, right: 14, top: 34, bottom: 42 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const values = data.flatMap((item) => [item.current, item.min7]).filter(Number.isFinite).concat(state.config.takePrice);
  const minY = Math.floor(Math.min(...values) * 0.9 / 10000) * 10000;
  const maxY = Math.ceil(Math.max(...values) * 1.08 / 10000) * 10000;
  drawGrid(ctx, pad, plotW, plotH, minY, maxY, 3);

  const groupW = plotW / data.length;
  const barW = Math.min(22, groupW * 0.22);
  chartHits.airport = [];
  data.forEach((item, index) => {
    const center = pad.left + groupW * (index + 0.5);
    const currentBar = drawBar(ctx, center - barW - 2, item.current, barW, minY, maxY, pad, plotH, css("--chart-line"));
    const minBar = drawBar(ctx, center + 2, item.min7, barW, minY, maxY, pad, plotH, css("--chart-min"));
    const labelLevel = index % 2 === 0 ? pad.top + 2 : pad.top + 16;
    if (Number.isFinite(item.current)) {
      drawBarValue(ctx, item.current, center - 4, labelLevel, "right", css("--chart-line"));
      chartHits.airport.push({ ...currentBar, anchorX: currentBar.x + currentBar.width / 2, anchorY: currentBar.y, tooltip: `${item.airport} · текущая<br>${escapeHtml(item.currentRecord.route)}<br>${escapeHtml(journeySummary(item.currentRecord))}<br><b>${escapeHtml(formatCurrency(item.current))}</b> за двоих` });
    }
    if (Number.isFinite(item.min7)) {
      drawBarValue(ctx, item.min7, center + 4, labelLevel, "left", css("--chart-min"));
      chartHits.airport.push({ ...minBar, anchorX: minBar.x + minBar.width / 2, anchorY: minBar.y, tooltip: `${item.airport} · минимум за 7 дней<br>${escapeHtml(item.min7Record.route)}<br>${escapeHtml(journeySummary(item.min7Record))}<br><b>${escapeHtml(formatCurrency(item.min7))}</b> за двоих` });
    }
    ctx.fillStyle = css("--text-soft");
    ctx.font = "700 11px Inter, Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(item.airport, center, height - 14);
  });

  const thresholdY = yScale(state.config.takePrice, minY, maxY, pad.top, plotH);
  ctx.save();
  ctx.strokeStyle = css("--accent");
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(pad.left, thresholdY);
  ctx.lineTo(pad.left + plotW, thresholdY);
  ctx.stroke();
  ctx.restore();
  if (!hasData) els.airportTooltip.hidden = true;
  els.airportChart.setAttribute("aria-label", hasData ? `Сравнение цен из ${data.filter((item) => item.current).map((item) => item.airport).join(", ")}` : "Нет данных для сравнения аэропортов");
}

function drawValueLabel(ctx, text, x, pointY, below, canvasWidth) {
  ctx.save();
  ctx.font = "750 10px Inter, Segoe UI, sans-serif";
  const boxW = ctx.measureText(text).width + 12;
  const boxH = 20;
  const boxX = Math.max(2, Math.min(canvasWidth - boxW - 2, x - boxW / 2));
  const boxY = below ? pointY + 9 : pointY - boxH - 9;
  ctx.fillStyle = css("--surface-raised");
  ctx.strokeStyle = css("--border-strong");
  ctx.lineWidth = 1;
  roundedRect(ctx, boxX, boxY, boxW, boxH, 7);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = css("--text");
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, boxX + boxW / 2, boxY + boxH / 2 + 0.5);
  ctx.restore();
}

function drawBarValue(ctx, value, x, y, align, color) {
  ctx.save();
  ctx.font = "750 9px Inter, Segoe UI, sans-serif";
  ctx.textAlign = align;
  ctx.textBaseline = "top";
  ctx.fillStyle = color;
  ctx.fillText(formatCurrency(value), x, y);
  ctx.restore();
}

function prepareCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) return null;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, rect.width, rect.height);
  return { ctx, width: rect.width, height: rect.height };
}

function drawGrid(ctx, pad, plotW, plotH, minY, maxY, lines = 4) {
  ctx.save();
  ctx.font = "10px Inter, Segoe UI, sans-serif";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let index = 0; index <= lines; index++) {
    const ratio = index / lines;
    const y = pad.top + plotH * ratio;
    const value = maxY - (maxY - minY) * ratio;
    ctx.strokeStyle = css("--chart-grid");
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(pad.left + plotW, y);
    ctx.stroke();
    ctx.fillStyle = css("--text-faint");
    ctx.fillText(shortCurrency(value), pad.left - 9, y);
  }
  ctx.restore();
}

function drawTimeLabels(ctx, points, pad, plotW, height) {
  const labels = points.length === 1 ? [points[0]] : [points[0], points[Math.floor((points.length - 1) / 2)], points.at(-1)];
  ctx.save();
  ctx.fillStyle = css("--text-faint");
  ctx.font = "10px Inter, Segoe UI, sans-serif";
  labels.forEach((point, index) => {
    const x = labels.length === 1 ? pad.left + plotW / 2 : pad.left + (plotW * index) / (labels.length - 1);
    ctx.textAlign = index === 0 ? "left" : index === labels.length - 1 ? "right" : "center";
    ctx.fillText(formatChartDate(point.x), x, height - 12);
  });
  ctx.restore();
}

function drawBar(ctx, x, value, width, minY, maxY, pad, plotH, color) {
  if (!Number.isFinite(value)) return null;
  const y = yScale(value, minY, maxY, pad.top, plotH);
  const bottom = pad.top + plotH;
  const height = Math.max(2, bottom - y);
  ctx.fillStyle = color;
  roundedRect(ctx, x, y, width, height, Math.min(5, width / 2));
  ctx.fill();
  return { x, y, width, height };
}

function roundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function yScale(value, minY, maxY, top, height) {
  return top + height - ((value - minY) / (maxY - minY)) * height;
}

function exportCsv() {
  const records = getVisibleRecords().sort((a, b) => b.timestampMs - a.timestampMs);
  const headers = ["Проверено", "Старт", "Маршрут", "Вылет туда", "Вылет обратно", "Уже дома", "Авиакомпания", "Пересадки", "В пути, ч", "Багаж", "Цена за двоих", "Цена на человека", "Оплата", "Источник", "Best flag", "Δ 24ч", "Δ 7д", "Мин 7д", "Статус"];
  const rows = records.map((r) => [r.timestamp, r.origin, r.route, r.departureDate, r.returnDate, r.homeArrivalDate || "Не проверено", r.airline, r.stops, r.travelTimeHours ?? "", r.baggage, r.totalPrice, r.pricePerPerson, r.payment, r.source, r.bestFlag ? "BEST" : "", r.delta24h ?? "", r.delta7d ?? "", r.min7d, statusLabel(r.status)]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(";")).join("\r\n");
  const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `thailand-flight-checks-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast(`Экспортировано: ${pluralize(records.length, ["запись", "записи", "записей"])}`);
}

function createDemoData() {
  const airports = [
    { code: "KZN", base: 184000, route: "KZN→BKK / HKT→KZN", airline: "Turkish Airlines" },
    { code: "MOW", base: 168000, route: "MOW→BKK / HKT→MOW", airline: "Air Arabia" },
    { code: "NBC", base: 194000, route: "NBC→BKK / HKT→NBC", airline: "Аэрофлот + партнёр" },
  ];
  const latest = Date.now();
  const checks = [];
  for (let cycle = 0; cycle < 16; cycle++) {
    const timestamp = new Date(latest - (15 - cycle) * 12 * 3600000).toISOString();
    airports.forEach((airport, airportIndex) => {
      const wave = Math.round(Math.sin((cycle + airportIndex) * 0.75) * 7000);
      const trend = -cycle * (airportIndex === 1 ? 800 : 350);
      checks.push({
        id: `demo-${cycle}-${airport.code}`,
        timestamp,
        origin: airport.code,
        route: airport.route,
        departureDate: `2026-12-${18 + ((cycle + airportIndex) % 3)}`,
        returnDate: `2027-01-0${7 + ((cycle + airportIndex * 2) % 3)}`,
        homeArrivalDate: "2027-01-09",
        airline: airport.airline,
        stops: airport.code === "MOW" ? 1 : (airportIndex % 2) + 1,
        travelTimeHours: 13.5 + airportIndex * 1.8 + (cycle % 3) * 0.4,
        baggage: "23 кг включён",
        totalPrice: airport.base + wave + trend,
        payment: airport.code === "MOW" ? "Рубли / российская карта" : "Не проверено",
        source: "https://example.com/",
        note: "Демонстрационная запись",
      });
    });
  }
  return { metadata: { schemaVersion: 1, updatedAt: new Date(latest).toISOString(), demo: true }, config: DEFAULT_CONFIG, checks };
}

function groupBy(items, keyFn) {
  const map = new Map();
  items.forEach((item) => {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  });
  return map;
}

function formatCurrency(value) {
  if (value === null || value === undefined || !Number.isFinite(Number(value))) return "—";
  return new Intl.NumberFormat("ru-RU", { style: "currency", currency: state.config.currency || "RUB", maximumFractionDigits: 0 }).format(Number(value));
}

function shortCurrency(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)} млн`;
  return `${Math.round(value / 1000)} тыс.`;
}

function formatDelta(value) {
  if (!Number.isFinite(value)) return "—";
  if (value === 0) return "0 ₽";
  return `${value < 0 ? "↓" : "↑"} ${formatCurrency(Math.abs(value))}`;
}

function deltaClass(value) {
  if (!Number.isFinite(value) || value === 0) return "";
  return value < 0 ? "delta-down" : "delta-up";
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("ru-RU", { timeZone: state.config.timezone, day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function formatChartDate(value) {
  return new Intl.DateTimeFormat("ru-RU", { timeZone: state.config.timezone, day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function formatShortDate(value) {
  const date = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return value || "—";
  return new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short" }).format(date);
}

function formatRelative(timestamp) {
  const hours = Math.round((Date.now() - timestamp) / 3600000);
  if (Math.abs(hours) < 1) return "менее часа назад";
  if (hours < 24) return `${hours} ч назад`;
  const days = Math.round(hours / 24);
  return `${days} дн. назад`;
}

function formatDuration(hours) {
  if (!Number.isFinite(hours)) return "—";
  const whole = Math.floor(hours);
  const minutes = Math.round((hours - whole) * 60);
  return minutes ? `${whole} ч ${minutes} м` : `${whole} ч`;
}

function formatStops(stops) {
  const number = Number(stops);
  if (!Number.isFinite(number)) return String(stops);
  if (number === 0) return "Без пересадок";
  if (number === 1) return "1 пересадка";
  return `${number} пересадки`;
}

function journeySummary(record) {
  const hasStops = record && record.stops !== null && record.stops !== undefined && record.stops !== "";
  const stops = hasStops ? formatStops(record.stops) : "Пересадки не указаны";
  const duration = Number.isFinite(record?.travelTimeHours) ? formatDuration(record.travelTimeHours) : "Время не указано";
  return `${stops} · ${duration}`;
}

function formatSource(source) {
  if (!source) return "—";
  try {
    const url = new URL(source);
    if (!/^https?:$/.test(url.protocol)) throw new Error();
    return `<a class="source-link" href="${escapeHtml(url.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url.hostname.replace(/^www\./, ""))} ↗</a>`;
  } catch {
    return escapeHtml(source);
  }
}

function offerLink(record) {
  const url = FlightRules.safeUrl(record.source);
  if (!url) return '<span class="scope-note">Ссылка не проверена</span>';
  const label = record.sourceType === "offer" ? "К предложению" : "Открыть поиск";
  return `<a class="offer-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="${label}: ${escapeHtml(record.route)}">${label} ↗</a>`;
}

function tripDates(record) {
  return `Туда ${formatShortDate(record.departureDate)} · вылет обратно ${formatShortDate(record.returnDate)} · дома ${record.homeArrivalDate ? formatShortDate(record.homeArrivalDate) : "уточняется"}`;
}

function renderDiscovery() {
  const runs = state.discoveryRuns.filter((r) => r.status === "completed" && Number.isFinite(Date.parse(r.timestamp)));
  const latest = runs.length ? Math.max(...runs.map((r) => Date.parse(r.timestamp))) : null;
  setText(els.discoveryUpdated, latest ? `Проверено ${formatDateTime(latest)}` : "Ещё не выполнен");
  const relevant = state.events.filter((event) => state.airports.has(event.origin)
    && FlightRules.eligibility(event) !== "excluded" && isWithinDuration(event) && (state.route === "all" || event.route === state.route)
    && FlightRules.safeUrl(event.source) && Number.isFinite(Date.parse(event.timestamp)));
  const now = Date.now();
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Moscow" }).format(new Date(now));
  const dayOf = (timestamp) => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Moscow" }).format(new Date(timestamp));
  const columns = [
    { label: "Сегодня", includes: (e) => dayOf(e.timestamp) === today },
    { label: "За 7 дней", includes: (e) => Date.parse(e.timestamp) >= now - 7 * 86400000 },
    { label: "За 30 дней", includes: (e) => Date.parse(e.timestamp) >= now - 30 * 86400000 },
  ];
  const labels = { added: "Добавлено", cancelled: "Отменено", sold_out: "Распродано", not_found: "Не найдено" };
  els.discoveryCounts.innerHTML = columns.map((column) => `<article><h3>${column.label}</h3>${Object.entries(labels).map(([kind, label]) => {
    const events = relevant.filter((e) => e.kind === kind && Date.parse(e.timestamp) <= now && column.includes(e)
      && (!["cancelled", "sold_out"].includes(kind) || e.confirmed === true));
    const count = new Set(events.map((e) => e.flightId)).size;
    return `<p>${label}<b>${latest ? count : "—"}</b></p>`;
  }).join("")}</article>`).join("");
  const events = relevant.filter((e) => e.kind !== "baseline" && Date.parse(e.timestamp) <= now && Date.parse(e.timestamp) >= now - 30 * 86400000)
    .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));
  els.discoveryEvents.innerHTML = `<p class="scope-note">${latest ? "Счётчики охватывают накопленную историю проверок. Первый список — исходная база, а не новые рейсы. Отмена или распродажа требуют подтверждения." : "Ежедневный поиск ещё не завершён. До первой проверки количество новых и исчезнувших рейсов неизвестно."}</p>`
    + events.map((e) => `<article class="discovery-event"><div><strong>${escapeHtml(e.route)}</strong><p>${escapeHtml(e.kind === "cancelled" || e.kind === "sold_out" ? e.confirmed === true ? labels[e.kind] : "Статус не подтверждён" : labels[e.kind] || "Изменение")} · ${formatDateTime(e.timestamp)}</p><p>${escapeHtml(tripDates(e))}</p><p><b>${escapeHtml(journeySummary(e))}</b></p>${e.note ? `<p>${escapeHtml(e.note)}</p>` : ""}</div>${offerLink(e)}</article>`).join("");
}

function statusLabel(status) {
  return { take: "БРАТЬ", watch: "НАБЛЮДАТЬ", expensive: "ДОРОГО", stale: "ОБНОВИТЬ ЦЕНУ", unavailable: "НЕДОСТУПНО", excluded: "ВНЕ УСЛОВИЙ" }[status] || "—";
}

function pluralize(value, forms) {
  const mod10 = value % 10;
  const mod100 = value % 100;
  const form = mod10 === 1 && mod100 !== 11 ? forms[0] : mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14) ? forms[1] : forms[2];
  return `${value} ${form}`;
}

function csvCell(value) {
  const string = String(value ?? "");
  return /[;"\r\n]/.test(string) ? `"${string.replace(/"/g, '""')}"` : string;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function setText(element, value) { element.textContent = value; }

function css(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3400);
}
