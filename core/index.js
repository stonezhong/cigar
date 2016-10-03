import IF from './If';
import FOR from './For';
import WHILE from './While';
import DO from './Do';
import BREAK from './Break';
import CONTINUE from './Continue';
import TRY from './Try';
import THROW from './Throw';
import SEQ from './Seq';
import PARA from './Para';
import LET from './Let';

import { add, mul} from './Math';
import { requireValue, promisify, transform, SLEEP, executeStatement } from './Util';

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

module.exports = {
    executeStatement: executeStatement,
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
    requireValue: requireValue,
};
