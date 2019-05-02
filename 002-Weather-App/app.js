const request = require('request');
const config = require('./config');

let location = "41.0735,-111.9532";
// console.log(config.url+location)
request( {url: config.url+location, json: true}, (error, response) => {
    console.log(response.body.daily.data[0].summary);
    console.log(`Currently it is ${response.body.currently.temperature} degrees out.`);
    console.log(`There is a ${response.body.currently.precipProbability}% chance of rain.`);
})

let lookupLocation = 'Layton Utah';
let encodedLocation = encodeURI(lookupLocation);
let mapBoxFinalURL = config.mapBoxURL+encodedLocation+'.json'+config.mapBoxAPIKey;
request( {url: mapBoxFinalURL, json: true}, (error, response) => {
    if(error) {
        console.log("Error, no such place found");
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(response.body.features[0].place_name);
        console.log(latitude, longitude);
    }
} )

// console.log(mapBoxFinalURL);