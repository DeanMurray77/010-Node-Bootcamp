const https = require('https');
const config = require('../002-Weather-App/config');

const request = https.request(config.url+'37.0965,-113.5684', (response) => {
    let data = '';

    response.on('data', (chunk) => { //One or more chunks of data coming in (can happen not all at once)
        data += chunk.toString(); //It comes in as a buffer, not a string.
    })

    response.on('end', ()=> {
        const body = JSON.parse(data); //On end, go ahead and convert to an object.
        console.log(body);
    })

})

request.on('error', (error) => { //Error handling
    console.log('Error: ', error);
})

request.end(); //Everything has been defined and setup above. Go ahead and call the API.