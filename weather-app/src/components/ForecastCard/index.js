import "./Forecast.scss";

export function ForecastCard({ day, date, weather, temp, feels }) {
   const card = $("<div></div>").addClass("forecast-card", "card1").html(`
         <p>${day}</p>
         <p>${date}</p>
         <img alt="Forecast image" />
         <p>${weather}</p>
         <p>${temp}°</p>
         <p>${feels}°</p>
      `);

   return card;
}
