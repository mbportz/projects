import { ForecastCard } from "./index";

describe("ForecastCard component", () => {
   const argumentMockup = {
      day: "Thursday",
      date: "July 2",
      weather: "fewClouds",
      temp: "25",
      feels: "25",
   };
   const $forecastCard = ForecastCard(argumentMockup);

   it("should return a div element with class name 'forecast-card'", () => {
      expect($forecastCard.prop("tagName")).toBe("DIV");

      expect($forecastCard.hasClass("forecast-card")).toBe(true);
   });

   it("should render provided data correctly", () => {
      const texts = $forecastCard
         .find("p")
         .map((i, el) => $(el).text())
         .get();

      expect(texts[0]).toBe("Thursday");
      expect(texts[1]).toBe("July 2");
      expect(texts[2]).toBe("fewClouds");
      expect(texts[3]).toBe("25°");
      expect(texts[4]).toBe("25°");
   });

   it("should include an image element", () => {
      // expect(f)
      expect($forecastCard.find("img").length).toBe(1);
   });
});
