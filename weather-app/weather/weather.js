// 43bd1b477b3ba830c013bb4ad32a5041

// https://api.darksky.net/forecast/43bd1b477b3ba830c013bb4ad32a5041/37.8267,-122.4233

const request = require('request');
const key = "43bd1b477b3ba830c013bb4ad32a5041"
const base_url = "https://api.darksky.net/forecast/";

var getWeather = (lat, lon, callback) => {
	// console.log(`${base_url + key}/${lat},${lon}`);
	request({
		url : `${base_url + key}/${lat},${lon}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {temperatue : body.currently.temperature});
		} else {
			callback('Unable to fetch temperature');
		}
	});
}

module.exports = {
	getWeather
};