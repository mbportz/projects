import { Loader } from "./index";

describe("Loader Component", () => {
   const $loader = Loader();

   it("should return a <asside> element with a class name of loader-container", () => {
      expect($loader.prop("tagName")).toBe("ASSIDE");
      expect($loader.hasClass("loader-container")).toBe(true)
   });

   it("should contain a loader div element", () => {
      expect($loader.find(".loader").length).toBe(1)
   })
});
