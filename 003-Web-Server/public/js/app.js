fetch('/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if(!data.error) {
            console.log(`The forecast for ${data.location} is ${data.forecast}`);
        } else {
            console.log(data.error);
        }
    })
})