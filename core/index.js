import IF from './If';
import FOR from './For';
import WHILE from './While';
import DO from './Do';
import BREAK from './Break';
import CONTINUE from './Continue';
import TRY from './Try';
import THROW from './Throw';

global['IF']        = IF;
global['FOR']       = FOR;
global['WHILE']     = WHILE;
global['DO']        = DO;
global['BREAK']     = BREAK;
global['CONTINUE']  = CONTINUE;
global['TRY']       = TRY;
global['THROW']     = THROW;

module.export = {};