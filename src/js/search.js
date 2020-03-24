function getCountry(userInput) {
  userInput = document.getElementById("countrySearch").value;
  userInput.replace(/\s/g, "%20");
  countryInfo(userInput);
}

function countryInfo(countryName) {
  // Gets data from the api
  fetch("https://corona.lmao.ninja/countries/" + countryName)
    .then(function(resp) {
      return resp.json();
    }) //Converts the returned data to JSON
    .then(function(data) {
      document.getElementById("country").innerHTML = data.country;
      document.getElementById("cases").innerHTML = "Cases: " + data.cases;
      document.getElementById("deaths").innerHTML = "Deaths: " + data.deaths;
      document.getElementById("casesToday").innerHTML =
        "Cases Today: " + data.todayCases;
      document.getElementById("deathsToday").innerHTML =
        "Deaths Today: " + data.todayDeaths;
    });
}
