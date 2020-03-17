function countryInfo(countryName) {
  fetch("https://corona.lmao.ninja/countries/" + countryName)
    .then(function(resp) {
      return resp.json();
    }) //Converts the returned data to JSON
    .then(function(data) {
      virusStats(data);
    })
    .catch(function() {
      // catch errors
    });
}

window.onload = function() {
  countryInfo("ireland");
};

function virusStats(d) {
  document.getElementById("country").innerHTML = d.country;
  document.getElementById("casesTotal").innerHTML = "Total Cases: " + d.cases;
  document.getElementById("casesToday").innerHTML =
    "Cases Today: " + d.todayCases;
  document.getElementById("deathsTotal").innerHTML =
    "Total Deaths: " + d.deaths;
  document.getElementById("deathsToday").innerHTML =
    "Deaths Today: " + d.todayDeaths;
}
