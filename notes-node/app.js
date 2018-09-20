console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;

var command = process.argv[2];
console.log('Command: ', command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add'){
	console.log('Adding new note...');
}
 else if (command === 'list'){
	console.log('Listing all notes...');
}
 else{
	console.log('Command not recognized.');
};
//var res = notes.addNote();
//var calc = notes.add(7, 6);
//console.log(res);
//var user = os.userInfo();

//fs.appendFile('greetings.txt', `Hello ${user.username} ! You are ${notes.age}`, function (err){
//	if (err){
//		console.log('Unable to write to file');
//	}
//});