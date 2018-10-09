console.log('Starting app.js');

//Defining constants used by the program
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');
const titleObject = {describe: 'Title of the note', demand: true, alias: 't'};
const bodyObject = {describe: 'Contents of the note', demand: true, alias: 'b'};

//Defining commands for the program
const argv = yargs
.command('add', 'Add a new note', {
	title: titleObject,
	body: bodyObject
})
.command('list', 'List all notes')
.command('read','Read a note',{
	title: titleObject
})
.command('remove', 'Deletes a note',{
	title: titleObject
})
.help()
.argv;

//Getting user input in the terminal
var command = argv._[0];

//Defining what to execute based on the user's input
if (command === 'add'){
	notes.addNote(argv.title, argv.body);
}
 else if (command === 'list'){
	notes.getAll();
}
 else if (command === 'read'){
	notes.getNote(argv.title);
}
 else if(command ==='remove'){
	notes.removeNote(argv.title);
}
 else{
	console.log('Command not recognized');
 };