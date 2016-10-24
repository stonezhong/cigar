const Util = require('./src/Util');
const Math = require('./src/Math');  // TODO: rename it, Math is a reserved object
const IF = require('./src/If');
const FOR = require('./src/For');
const WHILE = require('./src/While');
const DO = require('./src/Do');
const BREAK = require('./src/Break');
const CONTINUE = require('./src/Continue');
const TRY = require('./src/Try');
const THROW = require('./src/Throw');
const SEQ = require('./src/Seq');
const PARA = require('./src/Para');
const LET = require('./src/Let');
const AWAIT = require('./src/Await');

const requireValue = Util.requireValue;
const promisify = Util.promisify;
const transform = Util.transform;
const SLEEP = Util.SLEEP;
const executeProgram = Util.executeProgram;

const add = Math.add;
const mul = Math.mul;

global['IF']        = IF;
global['FOR']       = FOR;
global['WHILE']     = WHILE;
global['DO']        = DO;
global['BREAK']     = BREAK;
global['CONTINUE']  = CONTINUE;
global['TRY']       = TRY;
global['THROW']     = THROW;
global['SEQ']       = SEQ;
global['PARA']      = PARA;
global['SLEEP']     = SLEEP;
global['LET']       = LET;
global['AWAIT']     = AWAIT;


module.exports = {
    executeProgram: executeProgram,
    promisify: promisify,
    transform: transform,
    add: promisify(add),
    mul: promisify(mul),
    ge:  promisify((a, b) => a >= b),
    g:   promisify((a, b) => a > b),
    le:  promisify((a, b) => a <= b),
    l:   promisify((a, b) => a < b),
    eq:  promisify((a, b) => a === b),
    ne:  promisify((a, b) => a !== b),
    mod: promisify((a, b) => a % b),
};
