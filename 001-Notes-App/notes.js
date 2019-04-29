const fs = require('fs');

const getNotes = () => {
    const notes = loadNotes();
    return notes;
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const notes = JSON.parse(dataJSON);
        return notes;
    } catch(err) {
        return []; //if no file exists, return an empty array
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const filteredNotes = notes.filter((note) => {
        return note.title === title;
    })

    if(!filteredNotes.length) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    } else {
        console.log("A note already exists with that title");
    }

}

const removeNote = () => {

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}