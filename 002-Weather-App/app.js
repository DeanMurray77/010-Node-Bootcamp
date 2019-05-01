console.log('Starting');

setTimeout(()=> {
    console.log('2-second timeout is done');
}, 2000);

setTimeout(()=> {
    console.log('0-second timeout is done');
}, 0);

console.log('Stopping');