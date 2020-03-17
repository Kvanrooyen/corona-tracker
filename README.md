# Covid-19 Tracker

A simple site to track the number of cases of covid-19. One of the ideas behoned the project was so that I can improve my JavaScript skills.

## How it works

The data used is taken from [worldometer](https://www.worldometers.info/coronavirus/) using the following [API](https://github.com/NovelCOVID/API). I use a simple function to fetch the data from the API and then have it converted to JSON, to make it easier to use.

```js
function countryInfo(countryName) {
  fetch("https://corona.lmao.ninja/countries/" + countryName)
    .then(function(resp) {
      return resp.json();
    }) //Converts the returned data to JSON
    .then(function(data) {
      virusStats(data);
    })
    .catch(function() {
      // TODO: catch errors
    });
}
```

I then use another function, when the window loads, to choose the country. In the future this will be dynamic and not hard coded, giving the user the option to change the country.

```js
window.onload = function() {
  countryInfo("ireland");
};
```

Finally I have one more function that adds the data to the relevant tag in the `index.html`

```js
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
```

```html
<div>
  <h1 id="country"></h1>
  <p id="casesTotal"></p>
  <p id="deathsTotal"></p>
  <p id="deathsToday"></p>
  <p id="casesToday"></p>
</div>
```

## TODO

- [ ] Add the abillity to search for a country (COuntry not hardcoded)
- [ ] Add a link back to the [source code](https://github.com/Kvanrooyen/corona-tracker)
- [ ] Log and catch erorrs better
