console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var command = process.argv[2];
//var filteredArray = _.uniq(['Henrique', 1, 'Henrique', 1, 2, 3, 3, 4, 4, 5, 7]);
console.log('Command: ', command);
console.log(process.argv);

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