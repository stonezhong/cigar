// syntax: 
// SEQ(... statements);
// If you execute this statement, it will execute all inner 
// statements sequentially. And it is considered "completed" 
// once the last inner statement is "completed".
// 
// Question: When is a statement considered "completed"?
// Answer:   A statement is consider "completed" when the return value is resolved
// Question: How does it work if I have [statement1, statement2, statement3] in this group?
// Answer:   It will execute statement1, once statement1 is "completed", it will 
//           execute statement2, and when statement2 is "completed", it will execute
//           statement3, and when statement3 is completed, this SEQ([statement1, statement2, statement3])
//           is considered "completed"

const Statement = require('./Statement');
const SequentialStatementGroup = require('./SequentialStatementGroup');

const SEQ = function(... statements) {
    return new SequentialStatementGroup(statements);
}

module.exports = SEQ;
