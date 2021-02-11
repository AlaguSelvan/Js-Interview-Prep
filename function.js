// Check hoisting for both Function Statement & Function Expression

// Function Statement
// can be invoked before calling
function a() {
	console.log("a called")
}


// Function Expression
// Becomes undefined before calling
// has hoisting issues
var b = function () {
	console.log("b called")
}

// a();
// b();


// Anonymous Function
// function() {
	
// }

// Named Function Exp
// similar to function expression.
var c = function xyz() {
  console.log('b called');
};

// parameters & Arguments
// parameters:- variables inside function
// Arguments:- variables passed to function


// First class Functions
// when a functions is passed as a fn its a first class function
// ability of functions to be used as values is known as first class functions
function xyz() {
	console.log('xyz called')
}
var d = function(fn) {
	console.log('d called')
	return fn()
}
console.log(d(xyz));

