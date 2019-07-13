// Dummy function simulating an API call.
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject('The numbers must be non-negative.');
            }

            resolve(a + b);
        }, 2000);
    })
}

const doWork = async () => {
    let sum = await add(1, 99);
    console.log(sum);
    sum = await add(sum, 100);
    console.log(sum);
    sum = await add(sum, -100);
    console.log(sum);
    sum = await add(sum, 100);
    return sum;
}

doWork().then((result) => {
    console.log("Result of the function: " + result);
}).catch((e) => {
    console.log("e: ", e);
})