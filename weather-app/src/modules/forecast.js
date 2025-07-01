import { convertTimeZone } from "./utils.js";
import { DAYS_OF_THE_WEEK, MONTHS } from "./constants.js";

export function filterForecastByTime(forecastList) {
   const firstTime = forecastList[0].dt_txt.split(" ")[1];
   return forecastList.filter(
      (item) => item.dt_txt.split(" ")[1] === firstTime
   );
}

export function formatDateTime(dt_txt, timeZone) {
   const date = new Date(convertTimeZone(dt_txt, timeZone));
   return {
      dayName: DAYS_OF_THE_WEEK[date.getDay()],
      monthDay: `${MONTHS[date.getMonth()]} ${date.getDate()}`,
   };
}
