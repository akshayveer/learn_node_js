// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Connected to MongoDB server');
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		console.log('error while inserting document', err);
	// 		return;
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	db.collection('Users').insertOne({
		name: 'Akshay',
		age: 23,
		location: 'Noida'
	}, (err, result) => {
		if (err) {
			console.log('error while inserting document', err);
			return;
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
		console.log(result.ops[0]._id);

	})
	db.close();
});