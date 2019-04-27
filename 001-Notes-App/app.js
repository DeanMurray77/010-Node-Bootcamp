const getNotes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');

console.log(getNotes());
console.log(chalk.greenBright('Success'));
console.log(chalk.red.bold.inverse("Error"));
console.log("what?");


//1,3,6,8 points where the git color key changes...