const fs = require('fs');

const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Sage';
user.age = '22';

const userJSON = JSON.stringify(user);
fs.writeFileSync('data.json', userJSON);



// const book = {
//     title: "Torn",
//     author: "Dean Murray"
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const parsedData = JSON.parse(dataJSON);

// console.log(parsedData.author);
// console.log(parsedData.title);