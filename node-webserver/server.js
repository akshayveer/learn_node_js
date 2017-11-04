const express = require('express')
const hbs = require('hbs')

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

app.listen(3000, () => console.log('Server is up and running'));