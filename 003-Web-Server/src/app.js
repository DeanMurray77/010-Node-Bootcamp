const path = require('path');
const express = require("express");
const hbs = require('hbs');



const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', '.hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: "Dean Murray"
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: "Dean Murray"
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpMessage: 'If you need help, please email support@site.com',
        name: 'Dean Murray'
    });
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Layton',
        forecast: "Sunny with a high of 77"
    });
})

app.get('/help/*', (req, res) => {
    res.send('My help-specific 404 page');
})

app.get('*', (req, res) => {
    res.send('My temp 404 page');
})

app.listen(3000, ()=>{
    console.log("Server is up on port 3000");
});