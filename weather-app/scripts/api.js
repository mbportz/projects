function fetchData(endpoint) {
   return $.ajax({
      url: `${CONFIG.BASE_URL}${endpoint}`,
      method: 'GET',
   });
}