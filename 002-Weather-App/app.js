const request = require('request');
const config = require('./config');

let location = "37.8267,-122.4233";

request( {url: config.url+location}, (error, response) => {
    const parsedResponse = JSON.parse(response.body);
    console.log(parsedResponse.currently);    
} )