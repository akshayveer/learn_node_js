// var obj = {
// 	name : 'Akshay'
// };

// var stringObj = JSON.stringify(obj);

// console.log(stringObj);

// var personString = '{"name" : "Akshay", "age" : 25}'

// var personObj = JSON.parse(personString);

// console.log(personObj.name, personObj.age);

const fs = require('fs')

var orginalNote = {
	title : 'Some title',
	body : 'Some body'
};

var orginalNoteString = JSON.stringify(orginalNote);

fs.writeFileSync('notes.json', orginalNoteString);

var notesString = fs.readFileSync('notes.json');

var notesObj = JSON.parse(notesString);

console.log(typeof notesObj);
console.log(notesObj.title);