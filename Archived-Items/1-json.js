const fs = require('fs');

const book = {
    title: "Torn",
    author: "Dean Murray"
}

const bookJSON = JSON.stringify(book);

fs.writeFileSync('1-json.json', bookJSON);