export function getCurrentLocation() {
   return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            (position) => {
               const lat = position.coords.latitude;
               const lon = position.coords.longitude;
               resolve({ lat, lon });
            },
            (error) => {
               reject(error);
            }
         );
      } else {
         reject(new Error("Geolocation is not supported by this browser."));
      }
   });
}

export function convertTimeZone(date, timeZone) {
   const newDate = new Date(date);
   const shiftInMs = timeZone * 1000;
   const localDate = new Date(newDate.getTime() + shiftInMs);

   return localDate.toLocaleString();
}

export function showLoader() {
   $("#weather , #forecast").hide();
   $(".loader").show();
}

export function hideLoader() {
   $("#weather , #forecast").show();
   $(".loader").hide();
}
