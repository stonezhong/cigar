// syntax: 
// PARA(... statements);
// If you execute this statement, it will execute all inner 
// statements in parallel. And it is considered "completed" 
// once all the inner statements are "completed".
// 

import {executeStatement} from './Util';
import Statement from './Statement';
import ParallelStatementGroup from './ParallelStatementGroup';


let PARA = function(... statements) {
    return new ParallelStatementGroup(statements);
}

module.exports = PARA;
