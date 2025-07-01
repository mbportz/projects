import { convertTimeZone, getCurrentLocation } from "./utils.js";

describe("convertTimeZone", () => {
   it("should shift date forward by timezone offset", () => {
      const inputDate = "2025-07-01T12:00:00Z";
      const timeZone = 3600; // +1 hour in seconds

      const result = convertTimeZone(inputDate, timeZone);
      const outputDate = new Date(result);

      expect(outputDate.getUTCHours()).toBe(13); // 12 + 1
   });

   it("should shift date backward by timezone offset", () => {
      const inputDate = "2025-07-01T12:00:00Z";
      const timeZone = -7200; // -2 hours in seconds

      const result = convertTimeZone(inputDate, timeZone);
      const outputDate = new Date(result);

      expect(outputDate.getUTCHours()).toBe(10); // 12 - 2
   });
});

describe("getCurrentLocation", () => {
   beforeEach(() => {
      global.navigator.geolocation = {
         getCurrentPosition: jest.fn(),
      };
   });

   it("should resolve with coords when geolocation succeeds", async () => {
      const mockPosition = {
         coords: {
            latitude: 51.5,
            longitude: -0.1,
         },
      };

      navigator.geolocation.getCurrentPosition.mockImplementationOnce(
         (success) => success(mockPosition)
      );

      const result = await getCurrentLocation();
      expect(result).toEqual({ lat: 51.5, lon: -0.1 });
   });

   it("should reject when geolocation fails", async () => {
      const mockError = new Error("Permission denied");
      navigator.geolocation.getCurrentPosition.mockImplementationOnce(
         (_, error) => error(mockError)
      );

      await expect(getCurrentLocation()).rejects.toThrow("Permission denied");
   });

   it("should reject if geolocation is not supported", async () => {
      delete global.navigator.geolocation;

      await expect(getCurrentLocation()).rejects.toThrow(
         "Geolocation is not supported by this browser."
      );
   });
});
