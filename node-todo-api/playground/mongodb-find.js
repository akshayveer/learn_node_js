const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Connected to MongoDB server');
	// db.collection('Todos').find({
	// 	_id: new ObjectID('59fdd2738ed2d789353040cc')
	// }).toArray().then((todos) =>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(todos, undefined, 2));
	// 	db.close();
	// },(err) => {
	// 	console.log('Unable to fetech todos', err)
	// 	db.close();
	// });

	db.collection('Todos').find().count().then((count) =>{
		console.log('Todos');
		console.log(`Todos count ${count}`);
		db.close();
	},(err) => {
		console.log('Unable to fetech todos', err)
		db.close();
	});
	// db.close();
});