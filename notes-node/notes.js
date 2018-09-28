console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
	try{
		var notesstring = fs.readFileSync('notes-data.json');
		return JSON.parse(notesstring);
		}
		catch(e){
		return [];
		}
};

var saveNotes = (notes) =>{
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		console.log(`Note ${note.title} has been added!`);
		console.log(`Text: ${note.body}`);
	} else{
		console.log('This title has already been used!');
	}	
};

var getAll = () => {
	var result = fetchNotes();
	console.log(result);
};

var getNote = (title) => {
	var notes = fetchNotes();
	var filteredNote = notes.filter((note) => note.title === title);
	console.log(`Title: ${filteredNote.title}`);
	console.log(filteredNote.body)
};

var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);
	if(notes.length > filteredNotes.length){
		console.log(`Note ${title} deleted!`);
	}else{
		console.log("No notes with this name found!");
	}
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}