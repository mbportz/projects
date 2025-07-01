import solidCloud from "../../public/assets/images/cloud-solid.svg";
import partlyCloudy from "../../public/assets/images/partly-cloudy.svg";
import sunny from "../../public/assets/images/sun-solid.svg";
import cloudyDay from "../../public/assets/images/cloudy-day.svg";
import rainyDay from "../../public/assets/images/cloud-rain-solid.svg";
import fewClouds from "../../public/assets/images/weather-few-clouds-svgrepo-com.svg";
import hardRain from "../../public/assets/images/rain-hard.svg";

import wind from "../../public/assets/images/wind-solid.svg";
import humidity from "../../public/assets/images/droplet-solid.svg";
import visibility from "../../public/assets/images/eye-solid.svg";
import temp from "../../public/assets/images/temperature-full-solid.svg";

export const WEATHER_STATUS = {
   "broken clouds": { status: "Cloudy", src: solidCloud },
   "scattered clouds": {
      status: "Partly Cloudy",
      src: partlyCloudy,
   },
   "clear sky": { status: "Clear Sky", src: sunny },
   "overcast clouds": { status: "Overcast", src: cloudyDay },
   "light rain": { status: "Light Rain", src: rainyDay },
   "few clouds": {
      status: "Few Clouds",
      src: fewClouds,
   },
   "moderate rain": {
      status: "Moderate Rain",
      src: rainyDay,
   },
   "intensified rain": { status: "Heavy Rain", src: hardRain },
};

export const DAYS_OF_THE_WEEK = [
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
   "Sunday",
];

export const MONTHS = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];

export const weatherAttributes = [
   {
      value: "-- km/h",
      label: "Wind Speed",
      cardId: "weather-wind-speed",
      imgSrc: wind,
   },
   {
      value: "--%",
      label: "Humidity",
      cardId: "weather-humidity",
      imgSrc: humidity,
   },
   {
      value: "--km",
      label: "Visibility",
      cardId: "weather-visibility",
      imgSrc: visibility,
   },
   {
      value: "--°",
      label: "Visibility",
      cardId: "weather-feels-like",
      imgSrc: temp,
   },
];
