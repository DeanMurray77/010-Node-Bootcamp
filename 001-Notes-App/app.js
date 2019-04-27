const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note!')
    }
});

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function() {
        console.log('Listing the notes!')
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!')
    }
});

console.log(yargs.argv);

//1,3,6,8 points where the git color key changes...