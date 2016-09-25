import BreakError from './BreakError';

let theBreakError = new BreakError();

let BREAK = function() {
    return Promise.reject(theBreakError);
}

module.exports = BREAK;
