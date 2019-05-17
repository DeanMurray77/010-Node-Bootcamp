const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if(!location) {
    console.log("Please provide an address.");    
} else {
    geocode(location, (error, locationObject) => { //(error, data) is just the response back via callback
        if(error) {
            return console.log("Error:", error);
        }
        
        forecast(locationObject, (error, forecastData) => {
            if(error) {
                return console.log('Error', error)
            }
    
            console.log(locationObject.location);
            console.log(forecastData);
        })
    })
}