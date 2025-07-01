import { Weather } from "./index.js";
import { weatherAttributes } from "../../modules/constants";

describe("Weather component (integration)", () => {
   it("should create a <section> with id 'weather' and class 'container'", () => {
      const $weather = Weather();
      expect($weather.prop("tagName")).toBe("SECTION");
      expect($weather.attr("id")).toBe("weather");
      expect($weather.hasClass("container")).toBe(true);
   });

   it("should contain a weather-header block with expected elements", () => {
      const $weather = Weather();
      expect($weather.find(".weather-header").length).toBe(1);
      expect($weather.find(".weather-header h2").text()).toBe("London");
      expect($weather.find(".weather-header .weather-status").text()).toBe(
         "Partly Cloudy"
      );
      expect($weather.find(".weather-header .weather-icon").length).toBe(1);
      expect($weather.find(".weather-header-temp").length).toBe(1);
      expect($weather.find(".weather-header-feels").length).toBe(1);
   });

   it("should contain a #weather-content div", () => {
      const $weather = Weather();
      expect($weather.find("#weather-content").length).toBe(1);
   });

   it("should render one weather-card for each weatherAttribute", () => {
      const $weather = Weather();
      const $cards = $weather.find(".weather-card");
      expect($cards.length).toBe(weatherAttributes.length);

      // Optionally check that each has correct id from weatherAttributes:
      weatherAttributes.forEach((attr) => {
         expect($cards.filter(`#${attr.cardId}`).length).toBe(1);
      });
   });
});
