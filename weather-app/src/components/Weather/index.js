import "./Weather.scss";

import { WeatherCard } from "../WeatherCard";
import { weatherAttributes } from "../../modules/constants";

export function Weather() {
   const section = $("<section></section>")
      .attr("id", "weather")
      .addClass("container").html(`
         <div class="weather-header">
            <h2>London</h2>
            <p class="weather-status">Partly Cloudy</p>
            <div>
               <img class="weather-icon" src="" alt="" />
               <div>
                  <p class="weather-header-temp">18&deg;</p>
                  <p class="weather-header-feels">Feels like 20&deg;</p>
               </div>
            </div>
         </div>`);

   section.append('<div id="weather-content"></div>');

   const weatherContent = section.find("#weather-content");

   weatherAttributes.forEach((item) => {
      const { value, label, cardId, imgSrc } = item;

      weatherContent.append(
         WeatherCard({
            value,
            label,
            cardId,
            imgSrc,
         })
      );
   });

   return section;
}
