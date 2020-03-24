// Gets data from the api
fetch("https://corona.lmao.ninja/countries/")
  .then(function(resp) {
    return resp.json();
  }) //Converts the returned data to JSON
  .then(function(data) {
    // Loop through and iterate over the ID for both the HTMl and the JSON
    for (i = 0; i < 11; i++) {
      document.getElementById("country" + [i]).innerHTML = data[i].country;
      document.getElementById("cases" + [i]).innerHTML =
        "Cases: " + data[i].cases;
      document.getElementById("deaths" + [i]).innerHTML =
        "Deaths: " + data[i].deaths;
      document.getElementById("casesToday" + [i]).innerHTML =
        "Cases Today: " + data[i].todayCases;
      document.getElementById("deathsToday" + [i]).innerHTML =
        "Deaths Today: " + data[i].todayDeaths;
    }
  });
