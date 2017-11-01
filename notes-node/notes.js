console.log('starting notes.js')

var addNote = (title, body) => {
	console.log(`adding Note with title ${title} having body ${body}`);
};

var listNotes = () => {
	console.log("Listing notes");
};

var readNote = (title) => {
	console.log(`Reading notes having title ${title}`);
}

var deleteNote = (title) => {
	console.log(`Deleting note having title ${title}`)
}

module.exports = {
	addNote,
	listNotes,
	readNote,
	deleteNote
}



