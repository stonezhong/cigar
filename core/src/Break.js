// Break out the current loop statement
// syntax: 
// BREAK

const BreakError = require('./BreakError');

const theBreakError = new BreakError();

const BREAK = function() {
    return Promise.reject(theBreakError);
}

module.exports = BREAK;
