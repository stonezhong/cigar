const Util = require('./Util');
const promisify = Util.promisify;

function add(... args) {
    return args.reduce((pv, cv) => pv + cv, 0);
}

function mul(... args) {
    return args.reduce((pv, cv) => pv * cv, 1);
}

module.exports = {
    add: add,
    mul: mul,
};
