// Debouncing in JavaScript
let counter = 0;
const getData = () => {
	// calls an API and gets Data
	console.log('Fetching Data ...', counter++);
}

const debounce = function (fn, delay) {
	let timer
	return function() {
		let context = this
		let args = arguments;
		console.log(arguments, 'arguments')
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, delay);
	}
}

const betterFunction = debounce(getData, 300);