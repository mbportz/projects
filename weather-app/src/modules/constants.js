import solidCloud from "../assets/images/cloud-solid.svg";
import partlyCloudy from "../assets/images/partly-cloudy.svg";
import sunny from "../assets/images/sun-solid.svg";
import cloudyDay from "../assets/images/cloudy-day.svg";
import rainyDay from "../assets/images/cloud-rain-solid.svg";
import fewClouds from "../assets/images/weather-few-clouds-svgrepo-com.svg";

import wind from "../assets/images/wind-solid.svg";
import humidity from "../assets/images/droplet-solid.svg";
import visibility from "../assets/images/eye-solid.svg";
import temp from "../assets/images/temperature-full-solid.svg";

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
      title: "-- km/h",
      subtitle: "Wind Speed",
      cardId: "weather-wind-speed",
      imgSrc: wind,
   },
   {
      title: "--%",
      subtitle: "Humidity",
      cardId: "weather-humidity",
      imgSrc: humidity,
   },
   {
      title: "--km",
      subtitle: "Visibility",
      cardId: "weather-visibility",
      imgSrc: visibility,
   },
   {
      title: "--°",
      subtitle: "Visibility",
      cardId: "weather-feels-like",
      imgSrc: temp,
   },
];
