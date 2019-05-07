
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Saint George, UT', (error, data) => { //(error, data) is just the response back via callback
    if(error) {
        console.log("Error:", error);
    } else {
        (forecast(data.latitude, data.longitude, (error, data) => {
            if(error) {
                console.log('Error', error)
            } else {
                console.log('Data', data)
            }
        }))
    }

})