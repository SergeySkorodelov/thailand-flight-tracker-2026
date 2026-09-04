/* Shared rules for the dashboard and the notification feed. No network calls. */
(function (root) {
  "use strict";
  const scope = {
    departureDates: ["2026-12-18", "2026-12-19", "2026-12-20"],
    homeArrivalDates: ["2027-01-08", "2027-01-09", "2027-01-10"],
    preferredHomeArrivalDates: ["2027-01-09", "2027-01-10"],
    airports: ["KZN", "MOW", "NBC"],
  };
  function safeUrl(value) {
    try { const url = new URL(value); return /^https?:$/.test(url.protocol) ? url.href : null; }
    catch { return null; }
  }
  function eligibility(row) {
    if (!scope.airports.includes(row.origin) || !scope.departureDates.includes(row.departureDate)) return "excluded";
    if (!row.homeArrivalDate) return "pending";
    return scope.homeArrivalDates.includes(row.homeArrivalDate) ? "eligible" : "excluded";
  }
  function gaps(row) {
    const result = [];
    if (eligibility(row) !== "eligible" || row.homeArrivalVerified !== true) result.push("возвращение домой");
    if (row.baggageVerified !== true) result.push("багаж");
    if (row.feesVerified !== true) result.push("обязательные сборы");
    if (row.paymentVerified !== true) result.push("оплата российской картой");
    if (row.origin === "MOW" && row.groundTransferVerified !== true) result.push("дорога из/до Москвы");
    if (!safeUrl(row.source)) result.push("ссылка на предложение");
    return result;
  }
  function decision(row, config, now = Date.now()) {
    const direct = row.origin === "MOW" && row.stops !== null && row.stops !== "" && Number(row.stops) === 0;
    const take = Number(direct ? config.directMoscowTakePrice : config.takePrice) || (direct ? 250000 : 175000);
    const watch = Number(direct ? config.directMoscowWatchPrice : config.watchPrice) || (direct ? 300000 : 200000);
    const price = Number(row.totalPrice);
    const priceStatus = price <= take ? "take" : price <= watch ? "watch" : "expensive";
    const missing = gaps(row);
    const age = now - Date.parse(row.timestamp);
    const fresh = Number.isFinite(age) && age >= -300000 && age <= (Number(config.checkIntervalHours) || 6) * 3600000;
    const available = !["cancelled", "sold_out", "not_found"].includes(row.availability);
    const acceptableJourney = Number.isFinite(row.travelTimeHours) && row.travelTimeHours > 0 && row.travelTimeHours <= (config.maxTravelHours || 20)
      && row.stops !== null && row.stops !== "" && Number.isFinite(Number(row.stops)) && Number(row.stops) <= (config.maxInternationalStops ?? 1);
    if (!acceptableJourney) missing.push("длительность и пересадки");
    const status = !available ? "unavailable" : !fresh ? "stale" : eligibility(row) === "excluded" ? "excluded"
      : priceStatus === "take" && missing.length ? "watch" : priceStatus;
    return { status, priceStatus, fresh, missing, take, watch, direct, urgent: status === "take", alert: available && fresh && eligibility(row) !== "excluded" && ["take", "watch"].includes(status) };
  }
  const api = { scope, safeUrl, eligibility, gaps, decision };
  root.FlightRules = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : window);
