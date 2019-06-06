const path = require('path');
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', '.hbs');
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
        helpMessage: 'If you need help, please email support@site.com'
    });
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Layton',
        forecast: "Sunny with a high of 77"
    });
})

app.listen(3000, ()=>{
    console.log("Server is up on port 3000");
});