var square = (a) => a * a;

console.log(square(9));

var user = {
	name : 'Akshay',
	sayHi : () => {
		// usauall this will refer to enclosing function
		// hence it is not there this refers to global
		// this is part of arrow functoin
		console.log(arguments);
		console.log(`Saying hi from ${this.name}`);
	},
	sayHiAlt () {
		// this refers correctly
		console.log(arguments);
		console.log(`Saying hi from ${this.name}`);
	}
}

user.sayHi();
user.sayHiAlt();