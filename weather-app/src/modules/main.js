import {
   getAPILocationCoords,
   getAPIWeatherForecast,
   getAPICurrentWeather,
} from "./api.js";
import { showLoader, hideLoader, getCurrentLocation } from "./utils.js";
import { filterForecastByTime } from "./forecast.js";
import {
   updateWeatherHeaderDOM,
   updateWeatherForecastDOM,
} from "./domUpdates.js";

function updateForecast(data) {
   const filteredForecasting = filterForecastByTime(data[0].list);
   updateWeatherForecastDOM(filteredForecasting, data[0].city.timezone);
   hideLoader();
}

export function getWeatherForecastAndUpdate(location) {
   if (!location) return;
   showLoader();
   getAPILocationCoords(location)
      .done((data) => {
         const { lat, lon } = data[0];
         getUpdateWeatherForecast(lat, lon);
      })
      .fail(console.warn);
}

function getUpdateWeatherForecast(lat, lon) {
   $.when(getAPIWeatherForecast(lat, lon), getAPICurrentWeather(lat, lon))
      .done((forecast, weather) => {
         updateForecast(forecast);
         updateWeatherHeaderDOM(weather);
      })
      .fail((err) => console.warn("One failed", err));
}

export async function updateForecastWithCurrentLocation() {
   try {
      showLoader();
      const { lat, lon } = await getCurrentLocation();
      getUpdateWeatherForecast(lat, lon);
   } catch (err) {
      console.warn(err);
   }
}

export function handleFormSubmit(e) {
   e.preventDefault();
   const location = $("#form-input-location").val();
   $("#form-input-location").val("");
   getWeatherForecastAndUpdate(location);
}
