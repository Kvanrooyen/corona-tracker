fetch("https://corona.lmao.ninja/countries/")
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
      '<div class="card grey darken-3">' +
      `<div class="card-content white-text">` +
      `<span class="card-title" id="country${j}"><img src="${d[j].countryInfo.flag}" class="ctryFlag"/> </span>` +
      `<span id="cases${j}" class="cases"></span>` +
      `<span id="casesToday${j}" class="casesToday cases"></span>` +
      `<br />` +
      `<span id="deaths${j}" class="deaths"></span>` +
      `<span id="deathsToday${j}" class="deathsToday deaths"></span>` +
      `</div>` +
      `</div>` +
      `</li>`;
    document.getElementById("cardInput").innerHTML += cardBlockCode;
  }
}

function virusStats(d) {
  // Loop through and iterate over the ID for both the HTMl and the JSON
  for (i = 0; i < noCtry; i++) {
    document.getElementById(`country${i}`).innerHTML += d[i].country;
    document.getElementById(
      `cases${i}`
    ).innerHTML = `Total Cases: ${formatNumber(d[i].cases)}`;
    document.getElementById(
      `deaths${i}`
    ).innerHTML = `Total Deaths: ${formatNumber(d[i].deaths)}`;
    document.getElementById(`casesToday${i}`).innerHTML = formatNumber(
      ` (+${d[i].todayCases}) `
    );
    document.getElementById(`deathsToday${i}`).innerHTML = formatNumber(
      ` (${d[i].todayDeaths}) `
    );
  }
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, " ");
}
