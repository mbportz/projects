import { filterForecastByTime, formatDateTime } from "./forecast";

jest.mock("./utils.js", () => ({
   convertTimeZone: jest.fn((dt_txt) => dt_txt), // stub: return input as is
}));

describe("filterForecastByTime", () => {
   it("should filter list by matching time", () => {
      const list = [
         { dt_txt: "2025-07-01 12:00:00" },
         { dt_txt: "2025-07-02 12:00:00" },
         { dt_txt: "2025-07-03 15:00:00" },
      ];

      const result = filterForecastByTime(list);
      expect(result.length).toBe(2);
      expect(result).toEqual([
         { dt_txt: "2025-07-01 12:00:00" },
         { dt_txt: "2025-07-02 12:00:00" },
      ]);
   });
});

describe("formatDateTime", () => {
   it("should return correct dayName and monthDay", () => {
      const dt_txt = "2025-07-01 12:00:00";

      const result = formatDateTime(dt_txt, 0);
      expect(result).toEqual({
         dayName: "Wednesday",
         monthDay: "July 1",
      });
   });
});
