const weatherForm = document.querySelector('form');

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let route = '/weather?address=';
    route += event.target.elements.inputLocation.value;
    fetch(route).then((response) => {
        response.json().then((data) => {
            if(!data.error) {
                console.log(`The forecast for ${data.location} is ${data.forecast}`);
            } else {
                console.log(data.error);
            }
        })
    })
})