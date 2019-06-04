const path = require('path');
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.send("<h1>Weather App</h1><p>All weather, all of the time</p>");
})

app.get('/help', (req, res) => {
    res.send("Here's the help");
})

app.get('/about', (req, res) => {
    res.send("<h1>About:</h1>");
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