setTimeout(() => {
    console.log("Two seconds have passed");
}, 2000)

const names = ['Dizzy', 'Nitro', 'Katherine', 'Samantha', 'Gio'];
const shortNames = names.filter((name) => {
    return name.length < 7;
})

console.log(shortNames);

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };
    
        callback(data);    
    }, 3000)
}

geocode('Home', (data)=> {
    console.log(data);
});
