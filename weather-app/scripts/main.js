$(document).ready(() => {
   $("#form-submit").click((e) => {
      e.preventDefault();

      const location = $("#form-input-location").val();
      $("#form-input-location").val("");

      try {
         const { API_KEY } = CONFIG;

         const fetchLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`;

         $.get(fetchLocation, (data, status) => {
            const { lat, lon, name } = data[0];

            const fetchWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

            $.get(fetchWeather, (data, status) => {
               const { dt_txt } = data.list[0];
               const firstForecastedDate = dt_txt.split(" ")[1];

               const filteredForecasting = data.list.filter((value) => {
                  const forecastedDate = value.dt_txt.split(" ")[1];

                  if (forecastedDate === firstForecastedDate) return value;
               });

               const { main, weather, wind, visibility } =
                  filteredForecasting[0];

               // assign items on weather section
               $(".weather-header h2").text(name);
               $(".weather-header p:first-child").text(
                  WEATHER_STATUS[weather[0].description].status
               );
               $(".weather-header img").attr(
                  "src",
                  WEATHER_STATUS[weather[0].description].src
               );
               $(".weather-header-temp").text(`${Math.round(main.temp)}°`);
               $(".weather-header-feels").text(
                  `Feels like ${Math.round(main.feels_like)}°`
               );

               $(".weather-wind-speed p:first-of-type").text(
                  `${wind.speed} m/s`
               );
               $(".weather-humidity p:first-of-type").text(`${main.humidity}%`);
               $(".weather-visibility p:first-of-type").text(
                  `${visibility / 1000}km`
               );
               $(".weather-feels-like p:first-of-type").text(
                  `${Math.round(main.feels_like)}°`
               );

               filteredForecasting.forEach((item, index) => {
                  const { weather, main, dt_txt } = item;
                  const date = new Date(dt_txt);
                  const dayName =
                     index === 0
                        ? "Today"
                        : index === 1
                        ? "Tomorrow"
                        : DAYS_OF_THE_WEEK[date.getDay()];
                  
                  const MonthDay = `${
                     MONTHS[date.getMonth()]
                  } ${date.getDate()}`;

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

               // loop through forecast section
               // convert days to day
            });
         });
      } catch (err) {
         console.warn(err);
      }
   });
});
