import {
   updateForecastWithCurrentLocation,
   getWeatherForecastAndUpdate,
} from "./weatherForecastHandler.js";

import wind from "../assets/images/wind-solid.svg";
import humidity from "../assets/images/droplet-solid.svg";
import visibility from "../assets/images/eye-solid.svg";
import temp from "../assets/images/temperature-full-solid.svg";

export function initWeatherApp() {
   $(document).ready(() => {
      
      $("#weather-wind-speed img").attr("src", wind);
      $("#weather-humidity img").attr("src", humidity);
      $("#weather-visibility img").attr("src", visibility);
      $("#weather-feels-like img").attr("src", temp);

      updateForecastWithCurrentLocation();

      $("#form-submit").click((e) => {
         e.preventDefault();

         const location = $("#form-input-location").val();
         $("#form-input-location").val("");

         getWeatherForecastAndUpdate(location);
      });
   });
}
