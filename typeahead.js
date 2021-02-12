const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
	return cities.filter(({city, state}) => {
		// figure out if city or state matches the state
		const regex = new RegExp(wordToMatch, 'gi');
		return city.match(regex) || state.match(regex)
	})
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(e) {

	const matchesArray = findMatches(e.target.value, cities)
	const html = matchesArray.map((place) => {
		const regex = new RegExp(e.target.value, 'gi')
		const cityName = place.city.replace(
      regex,
      `<span class="hl">${e.target.value}</span>`
    );
    const stateName = place.state.replace(
      regex,
      `<span class="hl">${e.target.value}</span>`
    );
		return `
		<li>
			<span class="name">${cityName}, ${stateName}</span>
			<span class="population">${numberWithCommas(place.population)}</span>
		</li>
		`;
	})
	suggestions.innerHTML = html

}

const searchInput = document.getElementById('search')
const suggestions = document.getElementById('suggestions')

searchInput.addEventListener('keyup', debounce(displayMatches, 300));
searchInput.addEventListener('change', debounce(displayMatches, 300));