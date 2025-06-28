const CONFIG = {
   API_KEY: "e6b55e2826cb179571209fdcfa5196ed",
   BASE_URL: "http://api.openweathermap.org",
};

const WEATHER_STATUS = {
   "broken clouds": { status: "Cloudy", src: "assets/cloud-solid.svg" },
   "scattered clouds": {
      status: "Partly Cloudy",
      src: "assets/partly-cloudy.svg",
   },
   "clear sky": { status: "Clear Sky", src: "assets/sun-solid.svg" },
   "overcast clouds": { status: "Overcast", src: "assets/cloudy-day.svg" },
   "light rain": { status: "Light Rain", src: "assets/cloud-rain-solid.svg" },
   "few clouds": {
      status: "Few Clouds",
      src: "assets/weather-few-clouds-svgrepo-com.svg",
   },
   "moderate rain": {
      status: "Moderate Rain",
      src: "assets/cloud-rain-solid.svg",
   },
};
