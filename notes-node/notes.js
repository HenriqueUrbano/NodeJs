console.log('Starting notes.js');

module.exports.addNote = function(){
	console.log('addNote');
	return 'New Note';
};

module.exports.add = function(a,x){
	var result = a + x;
	console.log(result);
}