console.log('staring app')

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log(command);

if (command ===  'add') {
	console.log('Adding new note');
} else if (command === 'list') {
	console.log('Listing all notes');
} else if (command === 'read') {
	console.log('Fetching note');
} else if(command === 'delete') {
	console.log('Deleting note');
} else {
	console.log('command not recongnized');
}

