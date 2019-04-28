const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');

// Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ', argv.title);
        console.log('Body: ' + argv.body);
    }
});

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note!')
    }
});

// Create List command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function() {
        console.log('Listing the notes!')
    }
});

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note!')
    }
});

yargs.parse();

//1,3,6,8 points where the git color key changes...