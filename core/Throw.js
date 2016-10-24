// Syntax
// THROW(error)

const THROW = function(error) {
    return function() {
        return Promise.reject(error);
    };
}

module.exports = THROW;

