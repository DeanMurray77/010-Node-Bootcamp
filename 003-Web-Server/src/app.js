const express = require("express");

const app = express();

app.get('', (req, res) => {
    res.send("<h1>Weather App</h1><p>All weather, all of the time</p>");
})

app.get('/help', (req, res) => {
    res.send("Here's the help");
})

app.get('/about', (req, res) => {
    res.send({
        What: "A weather app",
        "Created by": "Dean Murray",
        Working: 'Sort of'
    });
})

app.get('/weather', (req, res) => {
    res.send("Here is the weather, so much weather");
})

app.listen(3000, ()=>{
    console.log("Server is up on port 3000");
});