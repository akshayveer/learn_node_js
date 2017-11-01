const request = require('request');

request({
	url : 'https://maps.googleapis.com/maps/api/geocode/json?address=2197%20west%2013th%20avenue,%20Vancouver',
	json : true
}, (error, response, body) => {
	console.log(JSON.stringify(body, undefined, 2));
});