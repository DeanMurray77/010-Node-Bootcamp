const fs = require('fs');

// const book = {
//     title: "Torn",
//     author: "Dean Murray"
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

const jsonFile = fs.readFileSync('1-json.json');

const parsedData = JSON.parse(jsonFile);
console.log(parsedData.author);
console.log(parsedData.title);