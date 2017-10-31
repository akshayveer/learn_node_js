console.log('starting notes.js')

module.exports.addNotes = () => {
	console.log('add notes was called');
	return 'New notes';
}

module.exports.add = (a, b) => {
	return a + b
}