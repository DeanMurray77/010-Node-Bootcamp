const request = require('request');
const config = require('./config');

let location = "41.0735,-111.9532";

request( {url: config.url+location, json: true}, (error, response) => {
    console.log(response.body.daily.data[0].summary);
    console.log(`Currently it is ${response.body.currently.temperature} degrees out.`);
    console.log(`There is a ${response.body.currently.precipProbability}% change of rain.`);
})