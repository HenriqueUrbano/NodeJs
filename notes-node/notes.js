console.log('Starting notes.js');

const fs = require('fs');

//Return the notes file. If empty leaves it blank
var fetchNotes = () => {
	try{
		var notesstring = fs.readFileSync('notes-data.json');
		return JSON.parse(notesstring);
		}
		catch(e){
		return [];
		}
};

//Write the notes into the notes storage file
var saveNotes = (notes) =>{
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

//Adds a new note to the file
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

//Returns all notes
var getAll = () => {
	var result = fetchNotes();
	console.log(`Printing ${result.length} notes`);
	console.log('--')
	result.forEach((note)=>{
		console.log(`Title: ${note.title}`);
		console.log(`Text: ${note.body}`)
		console.log('--');
		});
};

//Returns a specific note, based on the user's input
var getNote = (title) => {
	var notes = fetchNotes();
	var filteredNote = notes.filter((note) => note.title === title);
	if(filteredNote.length > 0){
		console.log(`Title: ${filteredNote[0].title}`);
		console.log(filteredNote[0].body);
	} else{
		console.log('Note not found!');
	}
};

//Removes a note from the storage
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

//Exports all the commands to the main fille
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}