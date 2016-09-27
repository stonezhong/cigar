// Bypass the rest of the loop body
// syntax: 
// CONTINUE

import ContinueError from './ContinueError';

let theContinueError = new ContinueError();

let CONTINUE = function() {
    return Promise.reject(theContinueError);
}

module.exports = CONTINUE;
