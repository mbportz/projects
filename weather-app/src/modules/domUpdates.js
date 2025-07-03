import { WEATHER_STATUS } from "./constants.js";
import { formatDateTime } from "./forecast.js";

export function updateWeatherHeaderDOM(weatherData) {
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
   $("#weather-wind-speed p:first-of-type").text(`${wind.speed} m/s`);
   $("#weather-humidity p:first-of-type").text(`${main.humidity}%`);
   $("#weather-visibility p:first-of-type").text(`${visibility / 1000}km`);
   $("#weather-feels-like p:first-of-type").text(
      `${Math.round(main.feels_like)}°`
   );
}

export function updateWeatherForecastDOM(filteredForecasting, timeZone) {
   filteredForecasting.forEach((item, index) => {
      const { weather, main, dt_txt } = item;
      const { dayName, monthDay } = formatDateTime(dt_txt, timeZone);
      const dayLabel = index === 0 ? "Tomorrow" : dayName;

      $(`.card${index + 1} p`)
         .eq(0)
         .text(dayLabel);
      $(`.card${index + 1} p`)
         .eq(1)
         .text(monthDay);
      $(`.card${index + 1} img`).attr(
         "src",
         WEATHER_STATUS[weather[0].description]?.src
      );
      $(`.card${index + 1} p`)
         .eq(2)
         .text(WEATHER_STATUS[weather[0].description]?.status);
      $(`.card${index + 1} p`)
         .eq(3)
         .text(`${Math.round(main.temp)}°`);
      $(`.card${index + 1} p`)
         .eq(4)
         .text(`${Math.round(main.feels_like)}°`);
   });
}
