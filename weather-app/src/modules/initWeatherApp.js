import {
   updateForecastWithCurrentLocation,
   getWeatherForecastAndUpdate,
} from "./weatherForecastHandler.js";

import { Header } from "../components/Header";
import { Weather } from "../components/Weather";
import { Forecast } from "../components/Forecast";
import { Loader } from "../components/Loader";

export function initWeatherApp() {
   $(document).ready(() => {
      $("body").append('<div id="app-root"></div>');

      const header = Header({
         title: "SkyCast",
         subTitle: "The only app you need for your weather needs",
      });

      const weather = Weather();
      const forecast = Forecast();
      const loader = Loader();

      const $root = $("#app-root").empty();

      $root.append(header);
      $root.append(weather);
      $root.append(forecast);
      $root.append(loader);

      updateForecastWithCurrentLocation();

      $("#form-submit").click((e) => {
         e.preventDefault();

         const location = $("#form-input-location").val();
         $("#form-input-location").val("");

         getWeatherForecastAndUpdate(location);
      });
   });
}
