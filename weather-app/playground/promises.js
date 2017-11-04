
var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('One or more argumnets is not number');
			}
		}, 1500);
	});
}

asyncAdd(1, 'a').then((sum) => {
	console.log('Result: ', sum);
	return asyncAdd(sum , 33);
}). then((sum) => {
	console.log('Result: ', sum);
}). catch ((errorMessage) => {
	console.log(errorMessage);
});


var somePromise = new Promise((resolve, reject) => {
	resolve('Hey it worked');
});

somePromise.then((message) => {
	console.log('Success : ', message);
});