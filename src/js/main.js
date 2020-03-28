fetch("https://corona.lmao.ninja/countries/?sort=cases")
  .then(function(resp) {
    return resp.json();
  }) //Converts the returned data to JSON
  .then(function(data) {
    cardBlock(data);
    virusStats(data);
  });

function cardBlock(d) {
  noCtry = Object.keys(d).length;
  // Loop through the number of countries with cases and add them
  for (j = 0; j < noCtry; j++) {
    var cardBlockCode =
      `<li class="collection-item">` +
      `<div class="col s12 m6">` +
      '<div class="card blue-grey darken-1">' +
      `<div class="card-content white-text">` +
      `<span class="card-title" id="country${j}"></span>` +
      `<p id="cases${j}"></p>` +
      `<p id="deaths${j}"></p>` +
      `<p id="casesToday${j}"></p>` +
      `<p id="deathsToday${j}"></p>` +
      `</div>` +
      `</div>` +
      `</li>`;
    document.getElementById("cardInput").innerHTML += cardBlockCode;
  }
}

function virusStats(d) {
  // Loop through and iterate over the ID for both the HTMl and the JSON
  for (i = 0; i < noCtry; i++) {
    document.getElementById(`country${i}`).innerHTML = d[i].country;
    document.getElementById(`cases${i}`).innerHTML = `Cases: ${d[i].cases}`;
    document.getElementById(`deaths${i}`).innerHTML = `Deaths: ${d[i].deaths}`;
    document.getElementById(
      `casesToday${i}`
    ).innerHTML = `Cases Today: ${d[i].todayCases}`;
    document.getElementById(
      `deathsToday${i}`
    ).innerHTML = `Deaths Today: ${d[i].todayDeaths}`;
  }
}
