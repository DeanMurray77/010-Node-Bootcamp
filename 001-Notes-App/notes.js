const fs = require('fs');
const chalk = require('chalk');

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

    const filteredNotes = notes.filter((note) => note.title === title)

    if(filteredNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse("Note added!"));
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse("A note already exists with that title"));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note)=> note.title !== title)

    if(filteredNotes.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(filteredNotes);
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}