import $ from "jquery";
import { handleFormSubmit } from "./main.js";

describe("handleFormSubmit", () => {
   let $input;

   beforeEach(() => {
      document.body.innerHTML = `
      <form>
        <input id="form-input-location" type="text" value="Manila" />
        <input id="form-submit" type="submit" value="Search" />
      </form>
    `;
      $input = $("#form-input-location");
   });

   it("should prevent default and clear the input value", () => {
      const preventDefault = jest.fn();

      handleFormSubmit({ preventDefault });

      expect(preventDefault).toHaveBeenCalled();
      expect($input.val()).toBe("");
   });
});
