// syntax: 
// SEQ(statements);

import {isPromise, getValue, executeStatement} from './Util';
import Statement from './Statement';
import SequentialStatementGroup from './SequentialStatementGroup';


let SEQ = function(... statements) {
    return new SequentialStatementGroup(statements);
}

module.exports = SEQ;
