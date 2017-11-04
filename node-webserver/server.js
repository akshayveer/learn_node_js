const express = require('express')

var app = express();

app.get('/', (req, res) => {
	// res.send('Hello from Akshay');
	res.send({
		"name" : 'Akshay',
		"age": 24
	})
});

app.get('/about', (req, res) => {
	res.send('About page');
})

app.listen(3000);