const request = require('request');
const config = require('../config');

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast = (latitude, longitude, callback) => {
    request( {url: config.url+latitude+','+longitude, json: true}, (error, response) => {
        if(error) {
            callback('The system was unable to connect to the weather service.');
        } else if (response.body.error) {
            callback("The system wasn't able to retrieve the weather for that location");        
        } else {
            callback(undefined, {
                daySummary: response.body.daily.data[0].summary,
                currentTemp: `Currently it is ${response.body.currently.temperature} degrees out.`,
                precipChance: `There is a ${response.body.currently.precipProbability}% chance of rain.`
            })
        }
    })   
}

module.exports = forecast;