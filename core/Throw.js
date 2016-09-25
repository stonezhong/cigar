// Syntax
// THROW(error)

let THROW = function(error) {
    return function() {
        return Promise.reject(error);
    };
}

module.exports = THROW;

