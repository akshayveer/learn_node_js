const request = require('request');

var geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);
	var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
	request({
		url,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to internet');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find the address');
		} else if (body.status === 'OK') {
			var add = body.results[0].formatted_address;
			var lng = body.results[0].geometry.location.lng;
			var lat = body.results[0].geometry.location.lat;
			callback(null, {Address : add, Longitue : lng, Latitude : lat});
		} else {
			callback(`Status ${body.status}`)
		}
	});
}

module.exports = {
	geocodeAddress
}