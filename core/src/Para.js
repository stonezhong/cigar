// syntax: 
// PARA(... statements);
// If you execute this statement, it will execute all inner 
// statements in parallel. And it is considered "completed" 
// once all the inner statements are "completed".
// 

const Util = require('./Util');
const Statement = require('./Statement');
const ParallelStatementGroup = require('./ParallelStatementGroup');
const executeStatement = Util.executeStatement;


const PARA = function(... statements) {
    return new ParallelStatementGroup(statements);
}

module.exports = PARA;
