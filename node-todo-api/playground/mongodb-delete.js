const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Connected to mongodb');

	// db.collection('Todos').deleteMany({text: 'Learn python'}).then((result) => {
	// 	console.log(result);
	// 	db.close();
	// }).catch((e) => {
	// 	console.log(e);
	// 	db.close();
	// });

	// db.collection('Todos').deleteOne({text: 'Learn python'}).then((result) => {
	// 	console.log(result);
	// 	db.close();
	// }).catch((e) => {
	// 	console.log(e);
	// 	db.close();
	// });

	db.collection('Todos').findOneAndDelete({completed: false}). then((result) => {
		console.log(result);
		db.close();
	}).catch((e) => {
		console.log(e);
		db.close();
	});
});