const utils = require('./utils')

it('should add two number', () => {
	var res = utils.add(1, 9);
	if (res !== 10) {
		throw new Error(`expected 10 but got,${res}`);
	} 
});

it('should square a number', () => {
	var res = utils.square(9);
	if (res != 81) {
		throw new Error(`expected 81 but got ${res}`);
	}
})