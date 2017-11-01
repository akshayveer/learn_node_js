console.log('staring app')

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = argv._[0];

if (command ===  'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note == undefined) {
		console.log('Duplicate title');
	} else {
		console.log('Note added')
	}
} else if (command === 'list') {
	notes.listNotes();
} else if (command === 'read') {
	notes.readNote(argv.title);
} else if(command === 'delete') {
	notes.deleteNote(argv.title);
} else {
	console.log('command not recongnized');
}

