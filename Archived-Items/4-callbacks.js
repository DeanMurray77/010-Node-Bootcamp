setTimeout(() => {
    console.log("Two seconds have passed");
}, 2000)

const names = ['Dizzy', 'Nitro', 'Katherine', 'Samantha', 'Gio'];
const shortNames = names.filter((name) => {
    return name.length < 7;
})

console.log(shortNames);