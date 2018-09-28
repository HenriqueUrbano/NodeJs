console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	try{
	var notesstring = fs.readFileSync('notes-data.json');
	notes = JSON.parse(notesstring);
	}
	catch(e){

	}	
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	} else{
		console.log('This title has already been used!');
	}	
};

var getAll = () => {
	var result = '';
	try{
	var jsonfile = fs.readFileSync('notes-data.json');
	result = JSON.parse(jsonfile);
	} catch(e){
		result = 'No notes to be fetched!'
	}
	console.log(result);
};

var getNote = (title) => {
	console.log('Getting note', title);
};

var removeNote = (title) => {
	console.log('Removing note', title);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}