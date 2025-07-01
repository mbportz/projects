import { WeatherCard } from "./index";
import wind from "../../../public/assets/images/wind.svg";

describe("WeatherCard Component", () => {
   const argumentMockup = {
      title: "10 km/h",
      subtitle: "Wind Speed",
      cardId: "weather-wind-speed",
      imgSrc: wind,
   };

   const $weatherCard = WeatherCard(argumentMockup);

   it("should create a <div> with an id of weather-wind-speed and a class of weather-card", () => {
      expect($weatherCard.prop("tagName")).toBe("DIV");
      expect($weatherCard.attr("id")).toBe("weather-wind-speed");
      expect($weatherCard.hasClass("weather-card")).toBe(true);
   });

   it("should render the correct image src and alt of Weather Icon", () => {
      expect($weatherCard.find("img").length).toBe(1);
      expect($weatherCard.find("img").attr("src")).toBe("image-test-file");
      expect($weatherCard.find("img").attr("alt")).toBe("Weather Icon");
   });

   it("should render the correct title and subtitle", () => {
      const $p = $weatherCard.find("p");

      expect($p.eq(0).text()).toBe("10 km/h");
      expect($p.eq(1).text()).toBe("Wind Speed");
   });
});
