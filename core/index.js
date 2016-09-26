import IF from './If';
import FOR from './For';
import WHILE from './While';
import DO from './Do';
import BREAK from './Break';
import CONTINUE from './Continue';
import TRY from './Try';
import THROW from './Throw';
import SEQ from './Seq';

import { add, ge, g, le, l, eq, ne, mod} from './Math';
import { requireValue } from './Util';

global['IF']        = IF;
global['FOR']       = FOR;
global['WHILE']     = WHILE;
global['DO']        = DO;
global['BREAK']     = BREAK;
global['CONTINUE']  = CONTINUE;
global['TRY']       = TRY;
global['THROW']     = THROW;
global['SEQ']       = SEQ;

global['C']         = {
    add: add,
    ge:  ge,
    g:   g,
    le:  le,
    l:   l,
    eq:  eq,
    ne:  ne,
    mod: mod,
    requireValue: requireValue,
};

module.export = {};
