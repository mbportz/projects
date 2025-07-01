import { Header } from "./index";

describe("Header Component", () => {
   const argumentMockup = {
      title: "skycast",
      subTitle: "weather test",
   };

   const $header = Header(argumentMockup);

   it("should return a <header> element", () => {
      expect($header.prop("tagName")).toBe("HEADER");
   });

   it("should render the correct title and subtitle", () => {
      expect($header.find("h1").text()).toBe("skycast");
      expect($header.find("p").text()).toBe("weather test");
   });

   it("should contain a form with a text input and submit button", () => {
      expect($header.find("form").length).toBe(1);
      expect($header.find("#form-input-location").attr("type")).toBe("text");
      expect($header.find("#form-submit").attr("type")).toBe("submit");
   });

   it("should have the correct input placeholders and values", () => {
      expect($header.find("#form-input-location").attr("placeholder")).toBe(
         "Search for a city..."
      );
      expect($header.find("#form-submit").attr("value")).toBe("Search");
   });
});
