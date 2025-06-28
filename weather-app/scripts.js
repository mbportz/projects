$(document).ready(() => {
   $("#form-submit").click((e) => {
      e.preventDefault();

      const location = $("#form-input-location").val();
      $("#form-input-location").val("");

      try {
         const { API_KEY } = CONFIG;

         const fetchLocation = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`;

         $.get(fetchLocation, (data, status) => {
            console.log("location status", status);
            const { lat, lon, name } = data[0];

            const fetchWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

            $.get(fetchWeather, (data, status) => {
               const { dt_txt } = data.list[0];
               const firstForecastedDate = dt_txt.split(" ")[1];

               const filteredForecasting = data.list.filter((value) => {
                  const forecastedDate = value.dt_txt.split(" ")[1];

                  if (forecastedDate === firstForecastedDate) return value;
               });

               // assign items on weather section

               // loop through forecast section
               // convert days to day
            });
         });
      } catch (err) {
         console.warn(err);
      }
   });
});
