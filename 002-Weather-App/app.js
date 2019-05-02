const request = require('request');
const config = require('./config');

let location = "37.8267,-122.4233";

request( {url: config.url+location, json: true}, (error, response) => {
    console.log(response.body.currently);
    console.log(`Currently it is ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% change of rain.`);
})