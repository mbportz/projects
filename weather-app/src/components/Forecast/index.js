import "./Forecast.scss";

export function Forecast() {
   const section = $("<section></section>")
      .attr("id", "forecast")
      .addClass("container").html(`
         <h2>📅 5-Day Forecast</h2>

         <div class="forecast-container"></div>
         `);

   const forecastContent = section.find(".forecast-container");
   const dayCount = 5;

   for (let count = 0; count < dayCount; count++) {
      forecastContent.append(`
      <div class="forecast-card card${count+1}">
         <p>--</p>
         <p>--</p>
         <img alt="" />
         <p>--</p>
         <p>--&deg;</p>
         <p>--&deg;</p>
      </div>
      `);
   }

   return section;
}
