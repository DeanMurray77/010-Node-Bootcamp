const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');

console.log(process.argv);
console.log(yargs.argv);

//1,3,6,8 points where the git color key changes...