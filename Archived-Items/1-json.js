const fs = require('fs');

// const book = {
//     title: "Torn",
//     author: "Dean Murray"
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const parsedData = JSON.parse(dataJSON);

console.log(parsedData.author);
console.log(parsedData.title);