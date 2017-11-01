const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOpt = {
	describe : 'Title for note',
	demand : true,
	alias: 't'
};

const bodyOpt = {
	describe: 'body for note',
	demand: true,
	alias: 'b'
};

var argv = 	yargs
			.command('add', 'Add new note', {
				title: titleOpt,
				body: bodyOpt
			})
			.command('list', 'List all notes')
			.command('read', 'Read a note', {
				 title: titleOpt
			})
			.command('delete', 'Delete a note', {
				title: titleOpt
			})
			.help()
			.argv;

var command = argv._[0];

if (command ===  'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note == undefined) {
		console.log('Duplicate title');
	} else {
		console.log('Note added')
	}
} else if (command === 'list') {
	var allNotes = notes.listNotes();
	allNotes.forEach((note) => console.log(note));
} else if (command === 'read') {
	var note = notes.readNote(argv.title);
	if (note) {
		console.log('Note found');
	} else {
		console.log('Note not found');
	}
} else if(command === 'delete') {
	var msg = notes.deleteNote(argv.title);
	console.log(msg);
} else {
	console.log('command not recongnized');
}

