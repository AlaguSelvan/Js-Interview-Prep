const fruits = ['Apple', 'Grape', 'Watermelon', 'Mango', 'Kiwi', 'Banana', 'Orange']



const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
		args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

document.getElementById('search').addEventListener('keyup', function(e) {
	let fruitsArray = []

	if(e.target.value) {
		fruitsArray = fruits.filter(fruit => fruit.toLowerCase().includes(e.target.value))
		fruitsArray = fruitsArray.map((fruit) => `<li>${fruit}</li>`);
	}
	debounce(showFruitsArray(fruitsArray), 300);


	console.log(fruitsArray)
})

function showFruitsArray(fruitsArray) {
	const html = !fruitsArray.length ? '' : fruitsArray.join('');
	document.querySelector('ul').innerHTML = html;
}