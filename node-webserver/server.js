const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const PORT = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `Current request at ${now} : ${req.method} : ${req.url}`;
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to append to log');
		}
	});
	console.log(log);
	next();
});

// app.use((req, res, next) => {
// 	res.render('maintainence.hbs');
// });

app.get('/', (req, res) => {
	// res.send('Hello from Akshay');
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Hello, have a nice day'
	})
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About page'
	})
})

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`));