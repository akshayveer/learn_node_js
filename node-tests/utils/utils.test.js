const utils = require('./utils')
const expect = require('expect')

it('should add two number', () => {
	var res = utils.add(1, 9);
	expect(res).toBe(10, `Expected 11 but got, ${res}`)
	/*if (res !== 10) {
		throw new Error(`expected 10 but got,${res}`);
	} */
});

it('should square a number', () => {
	var res = utils.square(9);
	expect(res).toBe(81, `Expected 81 but got ${res}`).toBeA('number');
	// if (res != 81) {
	// 	throw new Error(`expected 81 but got ${res}`); 
	// }
});

it('shoudl be equal', () => {
	// expect({name: 'Akshay'}).toBe({name: 'Akshay'}); // faiils
	expect({name : 'Akshay'}).toEqual({name: 'Akshay'});
});