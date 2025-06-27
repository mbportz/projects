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
            const lat = data[0].lat;
            const lon = data[0].lon;
            const fetchWeather = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

            $.get(fetchWeather, (data, status) => {
               console.log("weather status", status);
               alert(status);
               console.log(data);
            });
         });
      } catch (err) {
         console.warn(err);
      }
   });
});
