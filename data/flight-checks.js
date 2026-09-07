window.FLIGHT_TRACKER_DATA = {
  "metadata": {
    "schemaVersion": 2,
    "updatedAt": "2026-09-07T04:00:37.000Z",
    "timezone": "Europe/Moscow",
    "description": "Журнал проверок авиабилетов в Таиланд. Производные поля рассчитываются в браузере."
  },
  "config": {
    "passengers": 2,
    "departureDates": [
      "2026-12-18",
      "2026-12-19",
      "2026-12-20"
    ],
    "homeArrivalDates": [
      "2027-01-08",
      "2027-01-09",
      "2027-01-10"
    ],
    "preferredHomeArrivalDates": [
      "2027-01-09",
      "2027-01-10"
    ],
    "airports": [
      "KZN",
      "MOW",
      "NBC"
    ],
    "destinations": [
      "BKK",
      "HKT"
    ],
    "takePrice": 175000,
    "watchPrice": 200000,
    "directMoscowTakePrice": 250000,
    "directMoscowWatchPrice": 300000,
    "checkIntervalHours": 6,
    "currency": "RUB",
    "timezone": "Europe/Moscow",
    "maxTravelHours": 70,
    "maxInternationalStops": 1
  },
  "catalog": [],
  "events": [],
  "discoveryRuns": [
    {
      "id": "discovery-20260905-065600-partial",
      "timestamp": "2026-09-05T06:56:00+03:00",
      "status": "partial",
      "coverage": [
        "KZN→BKK / BKK→KZN; 20.12.2026–09.01.2027",
        "MOW→BKK / BKK→MOW; 19.12.2026–09.01.2027",
        "MOW→BKK / BKK→MOW; 20.12.2026–10.01.2027"
      ],
      "note": "Частичный ежедневный поиск. Номера рейсов в выдаче не раскрыты, поэтому устойчивые flightId и события baseline/added не создавались. Отмены и распродажа не подтверждены."
    },
    {
      "id": "discovery-20260906-065500-partial",
      "timestamp": "2026-09-06T06:55:00+03:00",
      "status": "partial",
      "coverage": [
        "KZN→HKT / HKT→KZN; 20.12.2026–09.01.2027",
        "NBC→HKT / HKT→NBC; 20.12.2026–09.01.2027"
      ],
      "note": "Частичный ежедневный поиск. Номера рейсов в выдаче не раскрыты, поэтому устойчивые flightId и события baseline/added не создавались. Отмены и распродажа не подтверждены."
    },
    {
      "id": "discovery-20260906-125500-partial",
      "timestamp": "2026-09-06T12:55:00+03:00",
      "status": "partial",
      "coverage": [
        "MOW→HKT / HKT→MOW; 18.12.2026–08.01.2027"
      ],
      "note": "Продолжение частичного ежедневного поиска. Номера рейсов в выдаче не раскрыты, поэтому устойчивые flightId и события baseline/added не создавались. Отмены и распродажа не подтверждены."
    },
    {
      "id": "discovery-20260906-185700-partial",
      "timestamp": "2026-09-06T18:57:00+03:00",
      "status": "partial",
      "coverage": [
        "NBC→BKK / BKK→NBC; 20.12.2026–09.01.2027",
        "NBC→BKK / BKK→NBC; 19.12.2026–08.01.2027"
      ],
      "note": "Продолжение частичного ежедневного поиска. Номера рейсов в выдаче не раскрыты, поэтому устойчивые flightId и события baseline/added не создавались. Отмены и распродажа не подтверждены."
    },
    {
      "id": "discovery-20260907-070037-partial",
      "timestamp": "2026-09-07T07:00:37+03:00",
      "status": "partial",
      "coverage": [
        "KZN→BKK / BKK→KZN; 18.12.2026–07.01.2027"
      ],
      "note": "Частичный ежедневный расширенный поиск. Сохранены быстрый и более долгий дешёвый варианты до 70 часов. Номера рейсов в выдаче не раскрыты, поэтому устойчивые flightId и события baseline/added не создавались. Отмены и распродажа рейсов не подтверждены."
    }
  ],
  "monitorRuns": [
    {
      "id": "monitor-20260905-025325-diagnostic",
      "timestamp": "2026-09-05T02:53:25+03:00",
      "status": "partial",
      "coverage": [],
      "nextScheduledAt": "2026-09-05T08:53:25+03:00",
      "note": "Проверено состояние автоматизации: расписание активно, но после 04.09.2026 12:45 новые цены не были сохранены. Последняя фоновая попытка не получила доступную выдачу браузера; цены не выдумывались."
    },
    {
      "id": "monitor-20260905-025740-mow-bkk",
      "timestamp": "2026-09-05T02:57:40+03:00",
      "status": "partial",
      "coverage": [
        "MOW→BKK / BKK→MOW; вылет 18.12.2026; обратный вылет 08.01.2027; два показательных варианта с багажом"
      ],
      "nextScheduledAt": "2026-09-05T08:57:40+03:00",
      "note": "Живая выдача доступна. Сохранены вариант с одной пересадкой и прямой вариант; остальные аэропорты и даты в этой ручной проверке не охвачены."
    },
    {
      "id": "monitor-20260905-065600-partial",
      "timestamp": "2026-09-05T06:56:00+03:00",
      "status": "partial",
      "coverage": [
        "KZN→BKK / BKK→KZN; вылет 20.12.2026; обратный вылет 09.01.2027; три варианта с багажом",
        "MOW→BKK / BKK→MOW; вылет 19.12.2026; обратный вылет 09.01.2027; вариант с пересадкой и прямой",
        "MOW→BKK / BKK→MOW; вылет 20.12.2026; обратный вылет 10.01.2027; оптимальный вариант с багажом"
      ],
      "nextScheduledAt": "2026-09-05T12:56:00+03:00",
      "note": "Публичная выдача доступна. Проверены три новые комбинации дат для BKK; HKT, NBC, open-jaw и остальные сочетания дат в этом запуске не охвачены. Цены с багажом сохранены, длительность пересадок источником не раскрыта."
    },
    {
      "id": "monitor-20260906-065500-partial",
      "timestamp": "2026-09-06T06:55:00+03:00",
      "status": "partial",
      "coverage": [
        "KZN→HKT / HKT→KZN; вылет 20.12.2026; обратный вылет 09.01.2027; дешёвый, быстрый и вариант S7 с багажом",
        "NBC→HKT / HKT→NBC; вылет 20.12.2026; обратный вылет 09.01.2027; выдача просмотрена, но итоговые цены с зарегистрированным багажом отсутствовали"
      ],
      "nextScheduledAt": "2026-09-06T12:55:00+03:00",
      "note": "Публичная выдача доступна после повторной попытки. Проверены две новые комбинации HKT. Для NBC фильтр багажа был недоступен, поэтому неподтверждённые цены без багажа не сохранялись. Остальные маршруты и даты в этом запуске не охвачены."
    },
    {
      "id": "monitor-20260906-125500-partial",
      "timestamp": "2026-09-06T12:55:00+03:00",
      "status": "partial",
      "coverage": [
        "MOW→HKT / HKT→MOW; вылет 18.12.2026; обратный вылет 08.01.2027; оптимальный, дешёвый с багажом, прямой и быстрый вариант с пересадкой"
      ],
      "nextScheduledAt": "2026-09-06T18:55:00+03:00",
      "note": "Публичная выдача доступна. Проверена новая комбинация Москва–Пхукет, включая прямой рейс и более долгий дешёвый вариант до 70 часов. Остальные аэропорты, даты и open-jaw в этом запуске не охвачены; длительность пересадок источник не раскрывает."
    },
    {
      "id": "monitor-20260906-185700-partial",
      "timestamp": "2026-09-06T18:57:00+03:00",
      "status": "partial",
      "coverage": [
        "NBC→BKK / BKK→NBC; вылет 20.12.2026; обратный вылет 09.01.2027; быстрый вариант с багажом",
        "NBC→BKK / BKK→NBC; вылет 19.12.2026; обратный вылет 08.01.2027; выдача просмотрена, но итоговые цены с зарегистрированным багажом отсутствовали"
      ],
      "nextScheduledAt": "2026-09-07T00:57:00+03:00",
      "note": "Публичная выдача доступна. Для 20–9 января сохранён единственный увиденный вариант с подтверждённым багажом; для 19–8 января багаж в выдаче отсутствовал, поэтому цены не сохранялись. Остальные даты, HKT и open-jaw в этом запуске не охвачены."
    },
    {
      "id": "monitor-20260907-070037-partial",
      "timestamp": "2026-09-07T07:00:37+03:00",
      "status": "partial",
      "coverage": [
        "KZN→BKK / BKK→KZN; вылет 18.12.2026; обратный вылет 07.01.2027; оптимальный, самый дешёвый с багажом и самый быстрый варианты"
      ],
      "nextScheduledAt": "2026-09-07T13:00:37+03:00",
      "note": "Публичная выдача доступна. Проверена новая комбинация Казань–Бангкок; сохранён диапазон от самого быстрого до более долгого дешёвого варианта, оба плеча до 70 часов. Остальные аэропорты, даты, HKT и open-jaw в этом запуске не охвачены. Длительность пересадок источник не раскрыл."
    }
  ],
  "checks": [
    {
      "id": "20260903-082531-kzn-bkk",
      "timestamp": "2026-09-03T08:25:31+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 32.83,
      "baggage": "20 кг — 2 места",
      "totalPrice": 200301,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK08012",
      "note": "Туда 25 ч 35 м, обратно 32 ч 50 м; пересадка в Шардже. Цена за 2 взрослых с багажом."
    },
    {
      "id": "20260903-082531-kzn-hkt",
      "timestamp": "2026-09-03T08:25:31+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Air Arabia + Batik Air + AirAsia",
      "stops": 2,
      "travelTimeHours": 38.5,
      "baggage": "15 кг — 2 места",
      "totalPrice": 230503,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812HKT08012",
      "note": "Туда 38 ч 30 м, обратно 34 ч 15 м; две пересадки. Цена за 2 взрослых с багажом."
    },
    {
      "id": "20260903-082531-mow-bkk-optimal",
      "timestamp": "2026-09-03T08:25:31+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern",
      "stops": 1,
      "travelTimeHours": 19.17,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 217141,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812BKK08012",
      "note": "Оптимальный вариант: туда 19 ч 10 м, обратно 18 ч 25 м; одна пересадка. Цена за 2 взрослых."
    },
    {
      "id": "20260903-082531-mow-bkk-direct",
      "timestamp": "2026-09-03T08:25:31+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW · прямой",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.17,
      "baggage": "23 кг — 2 места",
      "totalPrice": 426684,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812BKK08012",
      "note": "Прямой рейс: туда 9 ч 05 м, обратно 10 ч 10 м. Цена за 2 взрослых с багажом."
    },
    {
      "id": "20260903-082531-nbc-bkk",
      "timestamp": "2026-09-03T08:25:31+03:00",
      "origin": "NBC",
      "route": "NBC→BKK / BKK→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Аэрофлот + SCAT / Emirates + Победа",
      "stops": 2,
      "travelTimeHours": 42.92,
      "baggage": "10 кг — 2 места",
      "totalPrice": 259712,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812BKK08012",
      "note": "Туда 39 ч 55 м, обратно 42 ч 55 м; две пересадки и смена аэропорта в Москве. Цена за 2 взрослых с багажом."
    },
    {
      "id": "20260903-082531-ufa-hkt",
      "timestamp": "2026-09-03T08:25:31+03:00",
      "origin": "UFA",
      "route": "UFA→HKT / HKT→UFA",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Air Arabia + AirAsia",
      "stops": 2,
      "travelTimeHours": 37.08,
      "baggage": "20 кг — 2 места",
      "totalPrice": 237231,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1812HKT08012",
      "note": "Туда 37 ч 05 м, обратно не менее 33 ч 35 м; две пересадки. Возвращение в Уфу 10 января, поэтому вариант не соответствует жёсткому сроку прибытия."
    },
    {
      "id": "20260903-124649-kzn-bkk",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 15.92,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 232390,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK08012",
      "note": "Туда и обратно по 15 ч 55 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00 позволяет добраться до Набережных Челнов вовремя."
    },
    {
      "id": "20260903-124649-kzn-hkt",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern",
      "stops": 1,
      "travelTimeHours": 22,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 238220,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812HKT08012",
      "note": "Туда 22 ч, обратно 20 ч 40 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00."
    },
    {
      "id": "20260903-124649-mow-bkk",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Qatar Airways",
      "stops": 1,
      "travelTimeHours": 17.67,
      "baggage": "25 кг — 2 места",
      "totalPrice": 205198,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712BKK07012",
      "note": "Выгоднее основных дат: туда 17 ч 40 м, обратно 15 ч 45 м, одна пересадка в Дохе. Возвращение в Москву 7 января в 14:45."
    },
    {
      "id": "20260903-124649-mow-bkk-direct",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW · прямой",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.17,
      "baggage": "23 кг — 2 места",
      "totalPrice": 332384,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712BKK07012",
      "note": "Прямой рейс: туда 9 ч, обратно 10 ч 10 м. Возвращение в Москву 7 января в 16:25."
    },
    {
      "id": "20260903-124649-mow-hkt",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "China Eastern",
      "stops": 1,
      "travelTimeHours": 26,
      "baggage": "4 места, вес на странице не указан",
      "totalPrice": 220710,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712HKT07012",
      "note": "Выгоднее основных дат: туда 26 ч, обратно 18 ч 15 м, одна пересадка в Шанхае. Возвращение в Москву 7 января в 14:35."
    },
    {
      "id": "20260903-124649-nbc-bkk",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "NBC",
      "route": "NBC→BKK / BKK→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Аэрофлот + SCAT / Emirates + Победа",
      "stops": 2,
      "travelTimeHours": 42.92,
      "baggage": "10 кг — 2 места",
      "totalPrice": 260036,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812BKK08012",
      "note": "Туда 39 ч 55 м, обратно 42 ч 55 м; две пересадки и смена аэропорта в Москве. Прибытие в NBC 9 января в 16:00."
    },
    {
      "id": "20260903-124649-nbc-hkt",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "NBC",
      "route": "NBC→HKT / HKT→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Победа + Etihad / Batik Air + Аэрофлот",
      "stops": 3,
      "travelTimeHours": 31.5,
      "baggage": "10 кг — 2 места",
      "totalPrice": 356014,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812HKT08012",
      "note": "Туда 21 ч 25 м с двумя пересадками, обратно 31 ч 30 м с тремя. Прибытие в NBC 9 января в 16:50."
    },
    {
      "id": "20260903-124649-ufa-bkk",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "UFA",
      "route": "UFA→BKK / BKK→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 26,
      "baggage": "20 кг — 2 места",
      "totalPrice": 184565,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712BKK07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 26 ч, обратно 15 ч 15 м, одна пересадка в Шардже. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260903-124649-ufa-hkt",
      "timestamp": "2026-09-03T12:46:49+03:00",
      "origin": "UFA",
      "route": "UFA→HKT / HKT→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 17.58,
      "baggage": "20 кг — 2 места",
      "totalPrice": 243933,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712HKT07012",
      "note": "Выгоднее основных дат: туда 13 ч 50 м, обратно 17 ч 35 м, одна пересадка в Шардже. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260903-184447-kzn-bkk",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 15.92,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 232006,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK08012",
      "note": "Туда и обратно по 15 ч 55 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00 позволяет добраться до Набережных Челнов вовремя."
    },
    {
      "id": "20260903-184447-kzn-hkt",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 22,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 243894,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812HKT08012",
      "note": "Туда 22 ч, обратно 20 ч 40 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00."
    },
    {
      "id": "20260903-184447-mow-bkk",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Qatar Airways",
      "stops": 1,
      "travelTimeHours": 17.67,
      "baggage": "25 кг — 2 места",
      "totalPrice": 205198,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712BKK07012",
      "note": "Туда 17 ч 40 м, обратно 15 ч 45 м, одна пересадка в Дохе. Возвращение в Москву 7 января в 14:45."
    },
    {
      "id": "20260903-184447-mow-bkk-direct",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW · прямой",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.17,
      "baggage": "23 кг — 2 места",
      "totalPrice": 335384,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712BKK07012",
      "note": "Прямой рейс: туда 9 ч, обратно 10 ч 10 м. Возвращение в Москву 7 января в 16:25."
    },
    {
      "id": "20260903-184447-mow-hkt",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 22.58,
      "baggage": "20 кг — 2 места",
      "totalPrice": 196862,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712HKT07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 13 ч 10 м, обратно 22 ч 35 м, одна пересадка в Шардже. Возвращение в Москву 8 января в 12:55."
    },
    {
      "id": "20260903-184447-nbc-bkk",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "NBC",
      "route": "NBC→BKK / BKK→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Победа + Air Arabia / THAI + Centrum + партнёры",
      "stops": 3,
      "travelTimeHours": 37,
      "baggage": "10 кг — 2 места",
      "totalPrice": 280444,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812BKK08012",
      "note": "Туда 33 ч с двумя пересадками, обратно 37 ч с тремя. Прибытие в NBC 9 января в 16:00."
    },
    {
      "id": "20260903-184447-nbc-hkt",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "NBC",
      "route": "NBC→HKT / HKT→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Аэрофлот + China Eastern / AirAsia + Batik Air + партнёры",
      "stops": 3,
      "travelTimeHours": 32.5,
      "baggage": "10 кг — 2 места",
      "totalPrice": 303856,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812HKT08012",
      "note": "Туда 32 ч 05 м с двумя пересадками, обратно 32 ч 30 м с тремя. Прибытие в NBC 9 января в 16:00."
    },
    {
      "id": "20260903-184447-ufa-bkk",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "UFA",
      "route": "UFA→BKK / BKK→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 26,
      "baggage": "20 кг — 2 места",
      "totalPrice": 184385,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712BKK07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 26 ч, обратно 15 ч 15 м, одна пересадка в Шардже. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260903-184447-ufa-hkt",
      "timestamp": "2026-09-03T18:44:47+03:00",
      "origin": "UFA",
      "route": "UFA→HKT / HKT→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Centrum Air / AirAsia + Air Arabia",
      "stops": 2,
      "travelTimeHours": 19.17,
      "baggage": "10 кг — 2 места",
      "totalPrice": 219723,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712HKT07012",
      "note": "Туда 13 ч 55 м с одной пересадкой, обратно 19 ч 10 м с двумя. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260904-004537-kzn-bkk",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 15.92,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 231838,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK08012",
      "note": "Туда и обратно по 15 ч 55 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00 позволяет добраться до Набережных Челнов вовремя."
    },
    {
      "id": "20260904-004537-kzn-hkt",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 22,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 243772,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812HKT08012",
      "note": "Туда 22 ч, обратно 20 ч 40 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00."
    },
    {
      "id": "20260904-004537-mow-bkk",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 14.92,
      "baggage": "20 кг — 2 места",
      "totalPrice": 226350,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712BKK07012",
      "note": "Туда 12 ч 55 м, обратно 14 ч 55 м, одна пересадка в Шардже. Возвращение в Москву 7 января в 22:20."
    },
    {
      "id": "20260904-004537-mow-bkk-direct",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW · прямой",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.17,
      "baggage": "23 кг — 2 места",
      "totalPrice": 426684,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812BKK08012",
      "note": "Прямой рейс: туда 9 ч 05 м, обратно 10 ч 10 м. Возвращение в Москву 8 января."
    },
    {
      "id": "20260904-004537-mow-hkt",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 22.58,
      "baggage": "20 кг — 2 места",
      "totalPrice": 193776,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712HKT07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 13 ч 10 м, обратно 22 ч 35 м, одна пересадка в Шардже. Возвращение в Москву 8 января в 12:55."
    },
    {
      "id": "20260904-004537-nbc-bkk",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "NBC",
      "route": "NBC→BKK / BKK→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Аэрофлот",
      "stops": 1,
      "travelTimeHours": 18.42,
      "baggage": "23 кг — 2 места",
      "totalPrice": 512548,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812BKK08012",
      "note": "Самый дешёвый показанный тариф с багажом и прибытием не позднее 9 января: туда 18 ч 25 м, обратно 13 ч 55 м, одна пересадка в Москве."
    },
    {
      "id": "20260904-004537-nbc-hkt",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "NBC",
      "route": "NBC→HKT / HKT→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Победа + China Eastern / Malaysia Airlines + Emirates + Победа",
      "stops": 3,
      "travelTimeHours": 49.5,
      "baggage": "10 кг — 2 места",
      "totalPrice": 317266,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812HKT08012",
      "note": "Туда 49 ч 30 м с двумя пересадками, обратно 33 ч 30 м с тремя. Прибытие в NBC 9 января в 16:00."
    },
    {
      "id": "20260904-004537-ufa-bkk",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "UFA",
      "route": "UFA→BKK / BKK→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 26,
      "baggage": "20 кг — 2 места",
      "totalPrice": 182870,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712BKK07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 26 ч, обратно 15 ч 15 м, одна пересадка в Шардже. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260904-004537-ufa-hkt",
      "timestamp": "2026-09-04T00:45:37+03:00",
      "origin": "UFA",
      "route": "UFA→HKT / HKT→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Centrum Air / Nok Air + Air Arabia",
      "stops": 2,
      "travelTimeHours": 19.92,
      "baggage": "15 кг — 2 места",
      "totalPrice": 219564,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712HKT07012",
      "note": "Туда 13 ч 55 м с одной пересадкой, обратно 19 ч 55 м с двумя. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260904-064616-kzn-bkk",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 15.92,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 232560,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK08012",
      "note": "Туда и обратно по 15 ч 55 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00 позволяет добраться до Набережных Челнов вовремя."
    },
    {
      "id": "20260904-064616-kzn-hkt",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 22,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 244502,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812HKT08012",
      "note": "Туда 22 ч, обратно 20 ч 40 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00."
    },
    {
      "id": "20260904-064616-mow-bkk",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Qatar Airways",
      "stops": 1,
      "travelTimeHours": 17.67,
      "baggage": "25 кг — 2 места",
      "totalPrice": 205206,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712BKK07012",
      "note": "Туда 17 ч 40 м, обратно 16 ч 45 м, одна пересадка в Дохе. Возвращение в Москву 7 января в 14:45."
    },
    {
      "id": "20260904-064616-mow-bkk-direct",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW · прямой",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.17,
      "baggage": "23 кг — 2 места",
      "totalPrice": 333675,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712BKK07012",
      "note": "Прямой рейс: туда 9 ч, обратно 10 ч 10 м. Возвращение в Москву 7 января в 16:25."
    },
    {
      "id": "20260904-064616-mow-hkt",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 22.58,
      "baggage": "20 кг — 2 места",
      "totalPrice": 193776,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712HKT07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 13 ч 10 м, обратно 22 ч 35 м, одна пересадка в Шардже. Возвращение в Москву 8 января в 12:55."
    },
    {
      "id": "20260904-064616-nbc-bkk",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "NBC",
      "route": "NBC→BKK / BKK→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Аэрофлот",
      "stops": 1,
      "travelTimeHours": 18.42,
      "baggage": "23 кг — 2 места",
      "totalPrice": 512548,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812BKK08012",
      "note": "Самый дешёвый показанный тариф с багажом и прибытием не позднее 9 января: туда 18 ч 25 м, обратно 13 ч 55 м, одна пересадка в Москве."
    },
    {
      "id": "20260904-064616-nbc-hkt",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "NBC",
      "route": "NBC→HKT / HKT→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Аэрофлот + China Eastern / AirAsia + Batik Air + партнёры",
      "stops": 3,
      "travelTimeHours": 32.5,
      "baggage": "10 кг — 2 места",
      "totalPrice": 291526,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812HKT08012",
      "note": "Туда 29 ч 40 м с тремя пересадками, обратно 32 ч 30 м с тремя. Прибытие в NBC 9 января в 16:00."
    },
    {
      "id": "20260904-064616-ufa-bkk",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "UFA",
      "route": "UFA→BKK / BKK→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Centrum Air + Air Arabia",
      "stops": 1,
      "travelTimeHours": 18.33,
      "baggage": "20 кг — 2 места",
      "totalPrice": 190221,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712BKK07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 13 ч 30 м, обратно 18 ч 20 м, одна пересадка. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260904-064616-ufa-hkt",
      "timestamp": "2026-09-04T06:46:16+03:00",
      "origin": "UFA",
      "route": "UFA→HKT / HKT→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Centrum Air + Nok Air + Air Arabia",
      "stops": 2,
      "travelTimeHours": 24.42,
      "baggage": "15 кг — 2 места",
      "totalPrice": 219330,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712HKT07012",
      "note": "Туда 24 ч 25 м с двумя пересадками, обратно 19 ч 55 м с двумя. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260904-124536-kzn-bkk",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern",
      "stops": 1,
      "travelTimeHours": 15.92,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 235543,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK08012",
      "note": "Туда и обратно по 15 ч 55 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00 позволяет добраться до Набережных Челнов вовремя."
    },
    {
      "id": "20260904-124536-kzn-hkt",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 22,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 243904,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812HKT08012",
      "note": "Туда 22 ч, обратно 20 ч 40 м, одна пересадка в Шанхае. Возвращение в Казань 8 января в 17:00."
    },
    {
      "id": "20260904-124536-mow-bkk",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 19.17,
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 213372,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812BKK08012",
      "note": "Туда 19 ч 10 м, обратно 18 ч 25 м, одна пересадка в Китае. Возвращение в Москву 8 января в 15:30."
    },
    {
      "id": "20260904-124536-mow-bkk-direct",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW · прямой",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.17,
      "baggage": "23 кг — 2 места",
      "totalPrice": 335623,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712BKK07012",
      "note": "Прямой рейс: туда 9 ч 05 м, обратно 10 ч 10 м. Возвращение в Москву 7 января в 16:25."
    },
    {
      "id": "20260904-124536-mow-hkt",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 22.58,
      "baggage": "20 кг — 2 места",
      "totalPrice": 198677,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1712HKT07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 13 ч 10 м, обратно 22 ч 35 м, одна пересадка в Шардже. Возвращение в Москву 8 января в 12:55."
    },
    {
      "id": "20260904-124536-nbc-bkk",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "NBC",
      "route": "NBC→BKK / BKK→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Победа + Smartavia + партнёры / THAI + Centrum + партнёры",
      "stops": 3,
      "travelTimeHours": 41.83,
      "baggage": "10 кг — 2 места",
      "totalPrice": 299558,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812BKK08012",
      "note": "Туда 41 ч 50 м и обратно 37 ч с тремя пересадками. Прибытие в NBC 9 января в 16:00."
    },
    {
      "id": "20260904-124536-nbc-hkt",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "NBC",
      "route": "NBC→HKT / HKT→NBC",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "airline": "Победа + Etihad Airways / Batik Air Malaysia + Аэрофлот",
      "stops": 3,
      "travelTimeHours": 31.5,
      "baggage": "10 кг — 2 места",
      "totalPrice": 357443,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC1812HKT08012",
      "note": "Туда 21 ч 25 м с двумя пересадками, обратно 31 ч 30 м с тремя. Прибытие в NBC 9 января в 16:50."
    },
    {
      "id": "20260904-124536-ufa-bkk",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "UFA",
      "route": "UFA→BKK / BKK→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 26,
      "baggage": "20 кг — 2 места",
      "totalPrice": 185122,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712BKK07012",
      "note": "Сигнал «ПРИСМОТРЕТЬСЯ». Туда 26 ч, обратно 15 ч 15 м, одна пересадка в Шардже. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260904-124536-ufa-hkt",
      "timestamp": "2026-09-04T12:45:36+03:00",
      "origin": "UFA",
      "route": "UFA→HKT / HKT→UFA",
      "departureDate": "2026-12-17",
      "returnDate": "2027-01-07",
      "airline": "Centrum Air + Thai AirAsia / Nok Air + Air Arabia",
      "stops": 2,
      "travelTimeHours": 24.42,
      "baggage": "15 кг — 2 места",
      "totalPrice": 229161,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/UFA1712HKT07012",
      "note": "Туда 24 ч 25 м с двумя пересадками, обратно 19 ч 55 м с двумя. Прибытие в Уфу 8 января в 00:40."
    },
    {
      "id": "20260905-025740-mow-bkk-airchina-airarabia",
      "timestamp": "2026-09-05T02:57:40+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "homeArrivalDate": "2027-01-09",
      "homeArrivalAt": null,
      "airline": "Air China + Air Arabia",
      "stops": 1,
      "travelTimeHours": 16.25,
      "outbound": {
        "route": "SVO→BKK",
        "departureAt": "2026-12-18T17:25:00+03:00",
        "arrivalAt": "2026-12-19T13:40:00+07:00",
        "durationHours": 16.25,
        "stops": 1,
        "layovers": [
          {
            "airport": "PEK",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→DME",
        "departureAt": "2027-01-08T11:25:00+07:00",
        "arrivalAt": "2027-01-08T23:20:00+03:00",
        "durationHours": 15.9167,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "baggage": "20 кг — 2 места по данным выдачи",
      "totalPrice": 254426,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812BKK08012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Цена за двоих с багажом показана в выдаче. Аэропорты пересадок видны; длительность пересадок не раскрыта. Возвращение из Москвы в Набережные Челны 9 января возможно только как план и не подтверждено."
    },
    {
      "id": "20260905-025740-mow-bkk-aeroflot-direct",
      "timestamp": "2026-09-05T02:57:40+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW · прямой",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "homeArrivalDate": "2027-01-09",
      "homeArrivalAt": null,
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.1667,
      "outbound": {
        "route": "SVO→BKK",
        "departureAt": "2026-12-18T19:15:00+03:00",
        "arrivalAt": "2026-12-19T08:20:00+07:00",
        "durationHours": 9.0833,
        "stops": 0,
        "layovers": []
      },
      "inbound": {
        "route": "BKK→SVO",
        "departureAt": "2027-01-08T12:35:00+07:00",
        "arrivalAt": "2027-01-08T18:45:00+03:00",
        "durationHours": 10.1667,
        "stops": 0,
        "layovers": []
      },
      "baggage": "23 кг — 2 места по данным выдачи",
      "totalPrice": 430468,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812BKK08012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Прямой рейс в обе стороны. Цена за двоих с багажом показана в выдаче. Возвращение из Москвы в Набережные Челны 9 января пока не подтверждено."
    },
    {
      "id": "20260905-065600-kzn-bkk-20-09-cheapest-bag",
      "timestamp": "2026-09-05T06:56:00+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-20",
      "returnDate": "2027-01-09",
      "homeArrivalDate": "2027-01-10",
      "homeArrivalAt": null,
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 25.5833,
      "outbound": {
        "route": "KZN→BKK",
        "departureAt": "2026-12-20T23:55:00+03:00",
        "arrivalAt": "2026-12-22T05:30:00+07:00",
        "durationHours": 25.5833,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→KZN",
        "departureAt": "2027-01-09T06:30:00+07:00",
        "arrivalAt": "2027-01-09T22:55:00+03:00",
        "durationHours": 20.4167,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "baggage": "20 кг — 2 места по данным выдачи",
      "totalPrice": 212430,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN2012BKK09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Самый дешёвый увиденный вариант с багажом. Возвращение в Казань 9 января в 22:55; дорога до Набережных Челнов 10 января не подтверждена. Длительность пересадки источник не показал."
    },
    {
      "id": "20260905-065600-kzn-bkk-20-09-optimal",
      "timestamp": "2026-09-05T06:56:00+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-20",
      "returnDate": "2027-01-09",
      "homeArrivalDate": "2027-01-10",
      "homeArrivalAt": null,
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 19.4167,
      "outbound": {
        "route": "KZN→BKK",
        "departureAt": "2026-12-20T23:55:00+03:00",
        "arrivalAt": "2026-12-21T17:05:00+07:00",
        "durationHours": 13.1667,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→KZN",
        "departureAt": "2027-01-09T06:30:00+07:00",
        "arrivalAt": "2027-01-09T21:55:00+03:00",
        "durationHours": 19.4167,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "baggage": "20 кг — 2 места по данным выдачи",
      "totalPrice": 213201,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN2012BKK09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Оптимальный вариант выдачи с багажом. Возвращение в Казань 9 января в 21:55; фактическое прибытие домой 10 января не подтверждено. Длительность пересадок источник не показал."
    },
    {
      "id": "20260905-065600-kzn-bkk-20-09-fastest",
      "timestamp": "2026-09-05T06:56:00+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-20",
      "returnDate": "2027-01-09",
      "homeArrivalDate": "2027-01-10",
      "homeArrivalAt": null,
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 14.5,
      "outbound": {
        "route": "KZN→BKK",
        "departureAt": "2026-12-20T23:55:00+03:00",
        "arrivalAt": "2026-12-21T17:05:00+07:00",
        "durationHours": 13.1667,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→KZN",
        "departureAt": "2027-01-09T11:25:00+07:00",
        "arrivalAt": "2027-01-09T21:55:00+03:00",
        "durationHours": 14.5,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "baggage": "20 кг — 2 места по данным выдачи",
      "totalPrice": 260977,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN2012BKK09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Самый быстрый увиденный вариант с багажом. Возвращение в Казань 9 января в 21:55; фактическое прибытие домой 10 января не подтверждено. Длительность пересадок источник не показал."
    },
    {
      "id": "20260905-065600-mow-bkk-19-09-china-southern",
      "timestamp": "2026-09-05T06:56:00+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-19",
      "returnDate": "2027-01-09",
      "homeArrivalDate": "2027-01-10",
      "homeArrivalAt": null,
      "airline": "China Southern Airlines",
      "stops": 1,
      "travelTimeHours": 15.3333,
      "outbound": {
        "route": "SVO→BKK",
        "departureAt": "2026-12-19T14:50:00+03:00",
        "arrivalAt": "2026-12-20T10:10:00+07:00",
        "durationHours": 15.3333,
        "stops": 1,
        "layovers": [
          {
            "airport": "CAN",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→SVO",
        "departureAt": "2027-01-09T02:10:00+07:00",
        "arrivalAt": "2027-01-09T13:00:00+03:00",
        "durationHours": 14.8333,
        "stops": 1,
        "layovers": [
          {
            "airport": "CAN",
            "durationHours": null
          }
        ]
      },
      "baggage": "23 кг — 2 места по данным выдачи",
      "totalPrice": 265036,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1912BKK09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Вариант с одной пересадкой и багажом. Возвращение в Москву 9 января в 13:00; дорога до Набережных Челнов 10 января не подтверждена. Длительность пересадок источник не показал."
    },
    {
      "id": "20260905-065600-mow-bkk-19-09-direct",
      "timestamp": "2026-09-05T06:56:00+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW · прямой",
      "departureDate": "2026-12-19",
      "returnDate": "2027-01-09",
      "homeArrivalDate": "2027-01-10",
      "homeArrivalAt": null,
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.1667,
      "outbound": {
        "route": "SVO→BKK",
        "departureAt": "2026-12-19T19:15:00+03:00",
        "arrivalAt": "2026-12-20T08:20:00+07:00",
        "durationHours": 9.0833,
        "stops": 0,
        "layovers": []
      },
      "inbound": {
        "route": "BKK→SVO",
        "departureAt": "2027-01-09T10:15:00+07:00",
        "arrivalAt": "2027-01-09T16:25:00+03:00",
        "durationHours": 10.1667,
        "stops": 0,
        "layovers": []
      },
      "baggage": "23 кг — 2 места по данным выдачи",
      "totalPrice": 462159,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1912BKK09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Прямой рейс в обе стороны с багажом. Возвращение в Москву 9 января в 16:25; дорога до Набережных Челнов 10 января не подтверждена."
    },
    {
      "id": "20260905-065600-mow-bkk-20-10-optimal",
      "timestamp": "2026-09-05T06:56:00+03:00",
      "origin": "MOW",
      "route": "MOW→BKK / BKK→MOW",
      "departureDate": "2026-12-20",
      "returnDate": "2027-01-10",
      "homeArrivalDate": null,
      "homeArrivalAt": null,
      "airline": "China Eastern",
      "stops": 1,
      "travelTimeHours": 19.1667,
      "outbound": {
        "route": "SVO→BKK",
        "departureAt": "2026-12-20T16:45:00+03:00",
        "arrivalAt": "2026-12-21T15:55:00+07:00",
        "durationHours": 19.1667,
        "stops": 1,
        "layovers": [
          {
            "airport": "PVG",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→SVO",
        "departureAt": "2027-01-10T01:05:00+07:00",
        "arrivalAt": "2027-01-10T15:30:00+03:00",
        "durationHours": 18.4167,
        "stops": 1,
        "layovers": [
          {
            "airport": "PKX",
            "durationHours": null
          }
        ]
      },
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 219530,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW2012BKK10012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Оптимальный вариант выдачи с багажом. Прилёт в Москву 10 января в 15:30 не подтверждает возвращение в Набережные Челны в допустимый срок. Длительность пересадок источник не показал."
    },
    {
      "id": "20260906-065500-kzn-hkt-20-09-cheapest-bag",
      "timestamp": "2026-09-06T06:55:00+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-20",
      "returnDate": "2027-01-09",
      "homeArrivalDate": null,
      "homeArrivalAt": null,
      "airline": "Air Arabia + Thai AirAsia",
      "stops": 2,
      "travelTimeHours": 30.3333,
      "outbound": {
        "route": "KZN→HKT",
        "departureAt": "2026-12-20T23:55:00+03:00",
        "arrivalAt": "2026-12-22T10:15:00+07:00",
        "durationHours": 30.3333,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "HKT→KZN",
        "departureAt": "2027-01-09T23:10:00+07:00",
        "arrivalAt": "2027-01-10T22:55:00+03:00",
        "durationHours": 27.75,
        "stops": 2,
        "layovers": [
          {
            "airport": "DMK–BKK",
            "durationHours": null
          },
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "baggage": "15 кг — 2 места по данным выдачи",
      "totalPrice": 206857,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN2012HKT09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Самый дешёвый увиденный вариант с багажом. Прилёт в Казань 10 января в 22:55 не подтверждает возвращение в Набережные Челны в допустимый срок. Обратно две пересадки, включая смену аэропорта DMK–BKK; длительность пересадок источник не показал."
    },
    {
      "id": "20260906-065500-kzn-hkt-20-09-fastest",
      "timestamp": "2026-09-06T06:55:00+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-20",
      "returnDate": "2027-01-09",
      "homeArrivalDate": "2027-01-09",
      "homeArrivalAt": null,
      "airline": "Air Arabia + Etihad Airways",
      "stops": 1,
      "travelTimeHours": 13.9167,
      "outbound": {
        "route": "KZN→HKT",
        "departureAt": "2026-12-20T23:55:00+03:00",
        "arrivalAt": "2026-12-21T17:20:00+07:00",
        "durationHours": 13.4167,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "HKT→KZN",
        "departureAt": "2027-01-09T02:40:00+07:00",
        "arrivalAt": "2027-01-09T12:35:00+03:00",
        "durationHours": 13.9167,
        "stops": 1,
        "layovers": [
          {
            "airport": "AUH",
            "durationHours": null
          }
        ]
      },
      "baggage": "20 кг — 2 места по данным выдачи",
      "totalPrice": 307783,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN2012HKT09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Самый быстрый увиденный вариант с багажом. Прилёт в Казань 9 января в 12:35; последующая дорога до Набережных Челнов не подтверждена. Длительность пересадок источник не показал."
    },
    {
      "id": "20260906-065500-kzn-hkt-20-09-s7",
      "timestamp": "2026-09-06T06:55:00+03:00",
      "origin": "KZN",
      "route": "KZN→HKT / HKT→KZN",
      "departureDate": "2026-12-20",
      "returnDate": "2027-01-09",
      "homeArrivalDate": "2027-01-10",
      "homeArrivalAt": null,
      "airline": "S7 Airlines",
      "stops": 1,
      "travelTimeHours": 22.9167,
      "outbound": {
        "route": "KZN→HKT",
        "departureAt": "2026-12-20T21:30:00+03:00",
        "arrivalAt": "2026-12-21T16:40:00+07:00",
        "durationHours": 15.1667,
        "stops": 1,
        "layovers": [
          {
            "airport": "OVB",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "HKT→KZN",
        "departureAt": "2027-01-09T18:30:00+07:00",
        "arrivalAt": "2027-01-10T13:25:00+03:00",
        "durationHours": 22.9167,
        "stops": 1,
        "layovers": [
          {
            "airport": "OVB",
            "durationHours": null
          }
        ]
      },
      "baggage": "23 кг — 2 места по данным выдачи",
      "totalPrice": 369796,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN2012HKT09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Вариант S7 с багажом и одной пересадкой в каждом плече. Прилёт в Казань 10 января в 13:25; последующая дорога до Набережных Челнов не подтверждена. Длительность пересадок источник не показал."
    },
    {
      "id": "20260906-125500-mow-hkt-18-08-optimal",
      "timestamp": "2026-09-06T12:55:00+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "homeArrivalDate": "2027-01-09",
      "homeArrivalAt": null,
      "airline": "China Eastern + Shanghai Airlines",
      "stops": 1,
      "travelTimeHours": 18.25,
      "outbound": {
        "route": "SVO→HKT",
        "departureAt": "2026-12-18T16:45:00+03:00",
        "arrivalAt": "2026-12-19T14:30:00+07:00",
        "durationHours": 17.75,
        "stops": 1,
        "layovers": [
          {
            "airport": "PVG",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "HKT→SVO",
        "departureAt": "2027-01-08T00:20:00+07:00",
        "arrivalAt": "2027-01-08T14:35:00+03:00",
        "durationHours": 18.25,
        "stops": 1,
        "layovers": [
          {
            "airport": "PVG",
            "durationHours": null
          }
        ]
      },
      "baggage": "23 кг — 4 места по данным выдачи",
      "totalPrice": 259648,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812HKT08012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Оптимальный вариант выдачи с багажом. Прилёт в Москву 8 января в 14:35; дорога до Набережных Челнов 9 января не подтверждена. Длительность пересадок источник не показал."
    },
    {
      "id": "20260906-125500-mow-hkt-18-08-cheapest-bag",
      "timestamp": "2026-09-06T12:55:00+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "homeArrivalDate": "2027-01-10",
      "homeArrivalAt": null,
      "airline": "Air Arabia + Thai AirAsia / AirAsia + Batik Air Malaysia + Uzbekistan Airways",
      "stops": 2,
      "travelTimeHours": 26.3333,
      "outbound": {
        "route": "DME→HKT",
        "departureAt": "2026-12-18T03:15:00+03:00",
        "arrivalAt": "2026-12-19T09:30:00+07:00",
        "durationHours": 26.25,
        "stops": 2,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          },
          {
            "airport": "BKK",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "HKT→DME",
        "departureAt": "2027-01-08T11:30:00+07:00",
        "arrivalAt": "2027-01-09T09:50:00+03:00",
        "durationHours": 26.3333,
        "stops": 2,
        "layovers": [
          {
            "airport": "KUL",
            "durationHours": null
          },
          {
            "airport": "TAS",
            "durationHours": null
          }
        ]
      },
      "baggage": "10 кг — 2 места по данным выдачи",
      "totalPrice": 259497,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812HKT08012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Самый дешёвый увиденный вариант с багажом. Прилёт в Москву 9 января в 09:50; дорога до Набережных Челнов 10 января не подтверждена. По две пересадки в каждом плече; длительность пересадок источник не показал."
    },
    {
      "id": "20260906-125500-mow-hkt-18-08-direct",
      "timestamp": "2026-09-06T12:55:00+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW · прямой",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "homeArrivalDate": "2027-01-09",
      "homeArrivalAt": null,
      "airline": "Аэрофлот",
      "stops": 0,
      "travelTimeHours": 10.25,
      "outbound": {
        "route": "SVO→HKT",
        "departureAt": "2026-12-18T18:35:00+03:00",
        "arrivalAt": "2026-12-19T08:00:00+07:00",
        "durationHours": 9.4167,
        "stops": 0,
        "layovers": []
      },
      "inbound": {
        "route": "HKT→SVO",
        "departureAt": "2027-01-08T12:10:00+07:00",
        "arrivalAt": "2027-01-08T18:25:00+03:00",
        "durationHours": 10.25,
        "stops": 0,
        "layovers": []
      },
      "baggage": "23 кг — 2 места по данным выдачи",
      "totalPrice": 575999,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812HKT08012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Прямой рейс в обе стороны с багажом. Прилёт в Москву 8 января в 18:25; дорога до Набережных Челнов 9 января не подтверждена."
    },
    {
      "id": "20260906-125500-mow-hkt-18-08-etihad",
      "timestamp": "2026-09-06T12:55:00+03:00",
      "origin": "MOW",
      "route": "MOW→HKT / HKT→MOW",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-08",
      "homeArrivalDate": "2027-01-09",
      "homeArrivalAt": null,
      "airline": "Etihad Airways",
      "stops": 1,
      "travelTimeHours": 14.75,
      "outbound": {
        "route": "SVO→HKT",
        "departureAt": "2026-12-18T12:35:00+03:00",
        "arrivalAt": "2026-12-19T06:50:00+07:00",
        "durationHours": 14.25,
        "stops": 1,
        "layovers": [
          {
            "airport": "AUH",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "HKT→SVO",
        "departureAt": "2027-01-08T21:00:00+07:00",
        "arrivalAt": "2027-01-09T07:45:00+03:00",
        "durationHours": 14.75,
        "stops": 1,
        "layovers": [
          {
            "airport": "AUH",
            "durationHours": null
          }
        ]
      },
      "baggage": "25 кг — 2 места по данным выдачи",
      "totalPrice": 336905,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/MOW1812HKT08012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Быстрый вариант с одной пересадкой и багажом. Прилёт в Москву 9 января в 07:45; дорога до Набережных Челнов в тот же день не подтверждена. Длительность пересадок источник не показал."
    },
    {
      "id": "20260906-185700-nbc-bkk-20-09-aeroflot",
      "timestamp": "2026-09-06T18:57:00+03:00",
      "origin": "NBC",
      "route": "NBC→BKK / BKK→NBC",
      "departureDate": "2026-12-20",
      "returnDate": "2027-01-09",
      "homeArrivalDate": "2027-01-09",
      "homeArrivalAt": null,
      "airline": "Аэрофлот",
      "stops": 1,
      "travelTimeHours": 13.9167,
      "outbound": {
        "route": "NBC→BKK",
        "departureAt": "2026-12-20T17:40:00+03:00",
        "arrivalAt": "2026-12-21T10:40:00+07:00",
        "durationHours": 13,
        "stops": 1,
        "layovers": [
          {
            "airport": "SVO",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→NBC",
        "departureAt": "2027-01-09T10:15:00+07:00",
        "arrivalAt": "2027-01-09T20:10:00+03:00",
        "durationHours": 13.9167,
        "stops": 1,
        "layovers": [
          {
            "airport": "SVO",
            "durationHours": null
          }
        ]
      },
      "baggage": "23 кг — 2 места по данным выдачи",
      "totalPrice": 495939,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/NBC2012BKK09012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Самый быстрый вариант выдачи с багажом. Прилёт в Бегишево 9 января в 20:10; дорога от аэропорта до дома не подтверждена. Длительность пересадок источник не показал."
    },
    {
      "id": "20260907-070037-kzn-bkk-18-07-airarabia-optimal",
      "timestamp": "2026-09-07T07:00:37+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-07",
      "homeArrivalDate": "2027-01-08",
      "homeArrivalAt": null,
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 15.5,
      "outbound": {
        "route": "KZN→BKK",
        "departureAt": "2026-12-18T23:55:00+03:00",
        "arrivalAt": "2026-12-19T17:05:00+07:00",
        "durationHours": 13.1667,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→KZN",
        "departureAt": "2027-01-07T11:25:00+07:00",
        "arrivalAt": "2027-01-07T22:55:00+03:00",
        "durationHours": 15.5,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "baggage": "20 кг — 2 места по данным выдачи",
      "totalPrice": 233671,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK07012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Оптимальный вариант выдачи с одной пересадкой. Прилёт в Казань 7 января в 22:55; возвращение домой в Набережные Челны 8 января предполагается, но дорога не подтверждена. Длительность пересадок, обязательные сборы и оплата российской картой источником не подтверждены."
    },
    {
      "id": "20260907-070037-kzn-bkk-18-07-airarabia-cheapest-bag",
      "timestamp": "2026-09-07T07:00:37+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-07",
      "homeArrivalDate": "2027-01-08",
      "homeArrivalAt": null,
      "airline": "Air Arabia",
      "stops": 1,
      "travelTimeHours": 25.5833,
      "outbound": {
        "route": "KZN→BKK",
        "departureAt": "2026-12-18T23:55:00+03:00",
        "arrivalAt": "2026-12-20T05:30:00+07:00",
        "durationHours": 25.5833,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→KZN",
        "departureAt": "2027-01-07T11:25:00+07:00",
        "arrivalAt": "2027-01-07T22:55:00+03:00",
        "durationHours": 15.5,
        "stops": 1,
        "layovers": [
          {
            "airport": "SHJ",
            "durationHours": null
          }
        ]
      },
      "baggage": "20 кг — 2 места по данным выдачи",
      "totalPrice": 205043,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK07012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Самый дешёвый увиденный вариант с подтверждённым багажом; более долгий перелёт туда, но оба плеча короче 70 часов. Прилёт в Казань 7 января в 22:55; возвращение домой в Набережные Челны 8 января предполагается, но дорога не подтверждена. Длительность пересадок, обязательные сборы и оплата российской картой источником не подтверждены."
    },
    {
      "id": "20260907-070037-kzn-bkk-18-07-aeroflot-fastest",
      "timestamp": "2026-09-07T07:00:37+03:00",
      "origin": "KZN",
      "route": "KZN→BKK / BKK→KZN",
      "departureDate": "2026-12-18",
      "returnDate": "2027-01-07",
      "homeArrivalDate": "2027-01-08",
      "homeArrivalAt": null,
      "airline": "Аэрофлот",
      "stops": 1,
      "travelTimeHours": 13.5,
      "outbound": {
        "route": "KZN→BKK",
        "departureAt": "2026-12-18T15:35:00+03:00",
        "arrivalAt": "2026-12-19T08:20:00+07:00",
        "durationHours": 12.75,
        "stops": 1,
        "layovers": [
          {
            "airport": "SVO",
            "durationHours": null
          }
        ]
      },
      "inbound": {
        "route": "BKK→KZN",
        "departureAt": "2027-01-07T10:15:00+07:00",
        "arrivalAt": "2027-01-07T19:45:00+03:00",
        "durationHours": 13.5,
        "stops": 1,
        "layovers": [
          {
            "airport": "SVO",
            "durationHours": null
          }
        ]
      },
      "baggage": "23 кг — 2 места по данным выдачи",
      "totalPrice": 453635,
      "payment": "Цена в ₽; российскую карту уточнить у продавца",
      "source": "https://www.aviasales.ru/search/KZN1812BKK07012",
      "sourceType": "search",
      "availability": "available",
      "homeArrivalVerified": false,
      "baggageVerified": true,
      "feesVerified": false,
      "paymentVerified": false,
      "groundTransferVerified": false,
      "note": "Самый быстрый вариант выдачи с одной пересадкой. Источник показывал остаток 5 билетов по этой цене, но это не подтверждает распродажу рейса. Прилёт в Казань 7 января в 19:45; возвращение домой в Набережные Челны 8 января предполагается, но дорога не подтверждена. Длительность пересадок, обязательные сборы и оплата российской картой источником не подтверждены."
    }
  ]
};
