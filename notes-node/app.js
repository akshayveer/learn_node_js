console.log('staring app')

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile('message.txt', `Hello ${user.username}!`, function (err) {
	if (err) {
		console.log(err);
	}
});