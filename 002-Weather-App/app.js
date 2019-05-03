const request = require('request');
const config = require('./config');

let location = "41.0735,-111.9532";
console.log(config.url+location)
request( {url: config.url+location, json: true}, (error, response) => {
    if(error) {
        console.log('The system was unable to connect to the weather service.');
    } else if (response.body.error) {
        console.log("The system wasn't able to retrieve the weather for that location");        
    } else {
        console.log(response.body.daily.data[0].summary);
        console.log(`Currently it is ${response.body.currently.temperature} degrees out.`);
        console.log(`There is a ${response.body.currently.precipProbability}% chance of rain.`);
    }

})

let lookupLocation = 'Layton Utah';
let encodedLocation = encodeURI(lookupLocation);
let mapBoxFinalURL = config.mapBoxURL+encodedLocation+'.json'+config.mapBoxAPIKey;
request( {url: mapBoxFinalURL, json: true}, (error, response) => {
    if(error) {
        console.log('The system was unable to connect to the location service.');
    } else if (response.body.message) {
        console.log("The location system returned an error.");
    } else if (!response.body.features.length) {
        console.log("No such location found");
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(response.body.features[0].place_name);
        console.log(latitude, longitude);
    }
} )

// console.log(mapBoxFinalURL);