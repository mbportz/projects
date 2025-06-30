import {
   getAPILocationCoords,
   getAPIWeatherForecast,
   getAPICurrentWeather,
} from "./api";
import { WEATHER_STATUS, DAYS_OF_THE_WEEK, MONTHS } from "./constants";
import {
   hideLoader,
   showLoader,
   convertTimeZone,
   getCurrentLocation,
} from "./utils";

function updateWeatherHeader(weatherData) {
   const { weather, main, wind, visibility, name } = weatherData[0];
   const { description } = weather[0];

   $(".weather-header h2").text(name);
   $(".weather-header .weather-status").text(
      WEATHER_STATUS[description].status
   );
   $(".weather-header .weather-icon").attr(
      "src",
      WEATHER_STATUS[description].src
   );
   $(".weather-header-temp").text(`${Math.round(main.temp)}°`);
   $(".weather-header-feels").text(
      `Feels like ${Math.round(main.feels_like)}°`
   );

   $(".weather-wind-speed p:first-of-type").text(`${wind.speed} m/s`);
   $(".weather-humidity p:first-of-type").text(`${main.humidity}%`);
   $(".weather-visibility p:first-of-type").text(`${visibility / 1000}km`);
   $(".weather-feels-like p:first-of-type").text(
      `${Math.round(main.feels_like)}°`
   );
}

function updateWeatherForecast(filteredForecasting, timeZone) {
   filteredForecasting.forEach((item, index) => {
      const { weather, main, dt_txt } = item;
      const date = new Date(convertTimeZone(dt_txt, timeZone));

      const dayName =
         index === 0 ? "Tomorrow" : DAYS_OF_THE_WEEK[date.getDay()];

      const MonthDay = `${MONTHS[date.getMonth()]} ${date.getDate()}`;

      $(`.card${index + 1} p`)
         .eq(0)
         .text(dayName);
      $(`.card${index + 1} p`)
         .eq(1)
         .text(MonthDay);
      $(`.card${index + 1} img`).attr(
         "src",
         WEATHER_STATUS[weather[0].description].src
      );
      $(`.card${index + 1} p`)
         .eq(2)
         .text(WEATHER_STATUS[weather[0].description].status);
      $(`.card${index + 1} p`)
         .eq(3)
         .text(`${Math.round(main.temp)}°`);
      $(`.card${index + 1} p`)
         .eq(4)
         .text(`${Math.round(main.feels_like)}°`);
   });
}

function updateForecast(data) {
   const { dt_txt } = data[0].list[0];
   const { city } = data[0];

   const firstForecastedDate = dt_txt.split(" ")[1];

   const filteredForecasting = data[0].list.filter((value) => {
      const forecastedDate = value.dt_txt.split(" ")[1];

      if (forecastedDate === firstForecastedDate) return value;
   });

   updateWeatherForecast(filteredForecasting, city.timezone);

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
      .fail((err) => {
         console.warn;
      });
}

function getUpdateWeatherForecast(lat, lon) {
   $.when(getAPIWeatherForecast(lat, lon), getAPICurrentWeather(lat, lon))
      .done((forecast, weather) => {
         updateForecast(forecast);
         updateWeatherHeader(weather);
      })
      .fail((err) => {
         console.warn("One failed", err);
      });
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
