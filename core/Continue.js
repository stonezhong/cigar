import ContinueError from './ContinueError';

let theContinueError = new ContinueError();

let CONTINUE = function() {
    return Promise.reject(theContinueError);
}

module.exports = CONTINUE;
