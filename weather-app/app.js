const request = require('request');
const yargs = require('yargs');


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
var encodedURI = encodeURIComponent(address);



request({
	url : `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURI}`,
	json : true
}, (error, response, body) => {
	if (error) {
		console.log('unable to connect to google servers');
	} else if (body.status === 'ZERO_RESULTS') {
		console.log('unable to find the address');
	} else if (body.status === 'OK') {
		console.log(body.results[0].formatted_address);
		var location = body.results[0].geometry.location;
		console.log(`Latitude : ${location.lat}, Longitude : ${location.lng}`)
	}
	
});