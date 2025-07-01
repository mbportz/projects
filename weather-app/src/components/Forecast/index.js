import "./Forecast.scss";

export function Forecast() {
   const section = $("<section></section>")
      .attr("id", "forecast")
      .addClass("container").html(`
         <h2>📅 5-Day Forecast</h2>

         <div class="forecast-container"></div>
         `);

   const forecastContent = section.find(".forecast-container");
   const DAY_COUNT = 5;

   Array.from({ length: DAY_COUNT }).forEach((value, index) => {
      forecastContent.append(`
      <div class="forecast-card card${index + 1}">
         <p>--</p>
         <p>--</p>
         <img alt="Forecast icon" />
         <p>--</p>
         <p>--&deg;</p>
         <p>--&deg;</p>
      </div>
      `);
   });

   return section;
}
