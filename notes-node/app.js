console.log('staring app')

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
fs.appendFile('message.txt', `Hello ${user.username}!`, function (err) {
	if (err) {
		console.log(err);
	}
});

var res = notes.addNotes();
console.log(notes.add(1, 2));