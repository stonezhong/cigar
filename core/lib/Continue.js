// Bypass the rest of the loop body
// syntax: 
// CONTINUE

const ContinueError = require('./ContinueError');

const theContinueError = new ContinueError();

const CONTINUE = function() {
    return Promise.reject(theContinueError);
}

module.exports = CONTINUE;
