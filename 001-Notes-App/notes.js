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

    const duplicateNote = notes.find((note) => {
        return note.title === title;
    })

    if(!duplicateNote) {
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.greenBright.underline("Your notes:"));
    notes.forEach((note) => {
        console.log(chalk.green(note.title));
    })
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);

    if(!note) {
        console.log(chalk.red.inverse('No note found with that title:'));
    } else {
        console.log(chalk.greenBright.underline(note.title));
        console.log(note.body);
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}