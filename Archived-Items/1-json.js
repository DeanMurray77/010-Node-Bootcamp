const book = {
    title: "Torn",
    author: "Dean Murray"
}

const bookJSON = JSON.stringify(book);
console.log(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData);