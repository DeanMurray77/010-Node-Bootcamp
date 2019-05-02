const request = require('request');
const config = require('./config');

let location = "37.8267,-122.4233";

request( {url: config.url+location}, (error, response) => {
//    console.log(error);
   console.log(response);
} )