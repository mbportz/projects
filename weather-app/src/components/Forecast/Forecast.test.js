import { Forecast } from "./index";

describe("Forecast component", () => {
   const $forecast = Forecast();

   it("should return a <section> element with ID 'forecast'", () => {
      expect($forecast.prop("tagName")).toBe("SECTION");

      expect($forecast.attr("id")).toBe("forecast");
   });

   it("should contain a forecast container div", () => {
      expect($forecast.find(".forecast-container").length).toBe(1);
   });

   it("should render 5 forecast cards", () => {
      expect($forecast.find(".forecast-card").length).toBe(5);
   });

   it("should have card classes card1 to card5", () => {
      $forecast.find(".forecast-card").each((index, el) => {
         expect($(el).hasClass(`card${index + 1}`)).toBe(true);
      });
   });
});
