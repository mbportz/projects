import { API_KEY, BASE_URL } from "./config"

export function getAPILocationCoords(location) {
   const fetchLocation = `${BASE_URL}/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`;
   return $.get(fetchLocation);
}

export function getAPIWeatherForecast(lat, lon) {
   const fetchWeatherForecast = `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   return $.get(fetchWeatherForecast);
}

export function getAPICurrentWeather(lat, lon) {
   const fetchCurrentWeather = `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   return $.get(fetchCurrentWeather);
}
