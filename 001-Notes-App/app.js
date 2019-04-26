const getNotes = require('./notes.js');
const validator = require('validator');

console.log(getNotes());

console.log(validator.isEmail('dean@somesitecom'));
console.log(validator.isEmail('dean@somesite.com'));

console.log(validator.isURL('dean.com'));
console.log(validator.isURL('dean'));