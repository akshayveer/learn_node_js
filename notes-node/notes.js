const fs = require('fs');

var readNotesFromFs = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
}

var saveNotesToFs = (notes) => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

var addNote = (title, body) => {
	var notes = readNotesFromFs();
	var note = {
		title,
		body
	};
	var duplicates = notes.filter((note) => note.title === title);
	if (duplicates.length == 0) {
		notes.push(note);
		saveNotesToFs(notes);
		return note;
	}
};

var listNotes = () => {
	var notes = readNotesFromFs();
	return notes;
};

var readNote = (title) => {
	var notes = readNotesFromFs();
	var note = notes.filter((note) => note.title === title);
	return note[0];
}

var deleteNote = (title) => {
	var notes = readNotesFromFs();
	var otherNotes = notes.filter((note) => note.title !== title);
	var search = notes.filter((note) => note.title === title);

	saveNotesToFs(otherNotes);
	if (search.length == 0) {
		return 'Not present'
	} else {
		return 'delete sucess!!'
	}
}

module.exports = {
	addNote,
	listNotes,
	readNote,
	deleteNote
}



