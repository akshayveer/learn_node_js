const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')

var args = yargs
	.options({
		a : {
			demand: true,
			alias: 'address',
			description: 'Address to fetech weather',
			string: true
		}
	})
	.help()
	.argv

var address = args.a;
geocode.geocodeAddress(address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, null, 2));
		weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(JSON.stringify(results, null, 2));
			}
		})
	}
});