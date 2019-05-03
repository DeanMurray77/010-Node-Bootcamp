const request = require('request');
const config = require('./config');

// let location = "41.0735,-111.9532";
// console.log(config.url+location)
// request( {url: config.url+location, json: true}, (error, response) => {
//     if(error) {
//         console.log('The system was unable to connect to the weather service.');
//     } else if (response.body.error) {
//         console.log("The system wasn't able to retrieve the weather for that location");        
//     } else {
//         console.log(response.body.daily.data[0].summary);
//         console.log(`Currently it is ${response.body.currently.temperature} degrees out.`);
//         console.log(`There is a ${response.body.currently.precipProbability}% chance of rain.`);
//     }

// })

// let lookupLocation = 'Layton Utah';
// let encodedLocation = encodeURI(lookupLocation);
// let mapBoxFinalURL = config.mapBoxURL+encodedLocation+'.json'+config.mapBoxAPIKey;
// request( {url: mapBoxFinalURL, json: true}, (error, response) => {
//     if(error) {
//         console.log('The system was unable to connect to the location service.');
//     } else if (response.body.message) {
//         console.log("The location system returned an error.");
//     } else if (response.body.features.length === 0) {
//         console.log("No such location found. Please try again with a different location.");
//     } else {
//         const latitude = response.body.features[0].center[1];
//         const longitude = response.body.features[0].center[0];
//         console.log(response.body.features[0].place_name);
//         console.log(latitude, longitude);
//     }
// } )

const geocode = (address, callback) => { //definition.
    // callback in definiton means that function will wait for an
    // error or response

    let encodedLocation = encodeURIComponent(address);
    let mapBoxFinalURL = config.mapBoxURL+encodedLocation+'.json'+config.mapBoxAPIKey;

    //The second argument, combined with the callback() calls
    //(further down) indicate that it will wait for a response
    //or error before 'returning' via callback.
    request( {url: mapBoxFinalURL, json: true}, (error, response) => {
        if(error) {
            callback("The system was unable to connect with the location serice");
        } else if (response.body.message) {
            callback("The location system returned an error.");
        } else if (response.body.features.length === 0) {
            callback("No such location found. Please try again with a different location.");
        } else {
            const location = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            }
            callback(undefined, "location");
        }
    });
}

geocode('Layton, Utah', (error, data) => {
    console.log("Error: " + error);
    console.log("Data:" + data);   
})