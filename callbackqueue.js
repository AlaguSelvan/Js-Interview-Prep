console.log('start')

// regardless of delays setTimeout is asynchronous
setTimeout(() => {
	console.log('inside callback')
}, 300)


console.log('end')


// -- callstack --

// gec Code will run line by line