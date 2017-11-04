const yargs = require('yargs');
const axios = require('axios');

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
var encodedAddress = encodeURIComponent(address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
	if (response.data.status == 'ZERO_RESULTS') {
		throw new Error('Unable to find address');
	}
	// console.log(response.data);
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherUrl = `https://api.darksky.net/forecast/43bd1b477b3ba830c013bb4ad32a5041/${lat},${lng}`
	var add = response.data.results[0].formatted_address;
	console.log(`Address : ${add}`)
	return axios.get(weatherUrl);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	console.log(`Current temperature: ${temperature} F`);
}). catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to connect to server');
	} else {
		console.log(e.message);
	}
});
