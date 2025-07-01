import "./WeatherCard.scss";

export function WeatherCard({ title, subtitle, cardId, imgSrc }) {
   const card = $("<div></div>")
      .attr("id", cardId)
      .addClass("weather-card")

      .html(
         `<img src="${imgSrc}" alt="Weather Icon" />
         <p>${title}</p>
         <p>${subtitle}</p>`
      );

   return card;
}
