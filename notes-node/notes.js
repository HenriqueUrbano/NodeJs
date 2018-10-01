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
	console.log(`Printing ${result.length} notes`);
	console.log('--')
	result.forEach((note)=>{
		console.log(`Title: ${note.title}`);
		console.log(`Text: ${note.body}`)
		console.log('--');
		});
};

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