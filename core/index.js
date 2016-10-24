const Util = require('./lib/Util');
const Math = require('./lib/Math');  // TODO: rename it, Math is a reserved object
const IF = require('./lib/If');
const FOR = require('./lib/For');
const WHILE = require('./lib/While');
const DO = require('./lib/Do');
const BREAK = require('./lib/Break');
const CONTINUE = require('./lib/Continue');
const TRY = require('./lib/Try');
const THROW = require('./lib/Throw');
const SEQ = require('./lib/Seq');
const PARA = require('./lib/Para');
const LET = require('./lib/Let');
const AWAIT = require('./lib/Await');

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
