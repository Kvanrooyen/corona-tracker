/*
TODO:
  1. Create function to get what user inputed in the search bar after they press search
  2. Replace space character with %20
*/

function getCountry(userInput) {
  userInput = document.getElementById("countrySearch").value;
  userInput.replace(/\s/g, "%20");
  countryInfo(userInput);
}

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
