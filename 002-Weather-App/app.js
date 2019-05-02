const request = require('request');
const config = require('./config');

let location = "41.0735,-111.9532";
let APIOptions = '?units=si';

request( {url: config.url+location+APIOptions, json: true}, (error, response) => {
    console.log(`Currently it is ${response.body.currently.temperature} degrees out.`);
    console.log(`There is a ${response.body.currently.precipProbability}% change of rain.`);
})