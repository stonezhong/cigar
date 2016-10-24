// syntax: 
// IF (condition expression).THEN(... statements);
// IF (condition expression).THEN(... statements).ELSE(... statements);

const Util = require('./Util');
const Statement = require('./Statement');
const SequentialStatementGroup = require('./SequentialStatementGroup');
const executeStatement = Util.executeStatement;

class IfStatement extends Statement {
    // conditionExpr;
    // trueBranchStatement;
    // falseBranchStatement;
    constructor(conditionExpr) {
        super();
        this.conditionExpr = conditionExpr;
    }

    runWithResolvedCondition(resolvedConditionValue, scopeContext) {
        if (resolvedConditionValue) {
            return executeStatement(this.trueBranchStatement, scopeContext);
        } else {
            return executeStatement(this.falseBranchStatement, scopeContext);
        }
    }

    run(scopeContext) {
        return Promise.resolve(executeStatement(this.conditionExpr, scopeContext)).then(
            (resolvedConditionValue) => {
                return this.runWithResolvedCondition(resolvedConditionValue, scopeContext); 
            }
        );
    }
}


class IfConditionNode {
    constructor(condition) {
        this.ifStatement = new IfStatement(condition);
    }

    // ifStatement
    THEN(... statements) {
        this.ifStatement.trueBranchStatement = new SequentialStatementGroup(statements);
        return new IfConditionThenStatement(this.ifStatement);
    }

    ELSE(... statements) {
        this.ifStatement.falseBranchStatement = new SequentialStatementGroup(statements);
        return this.ifStatement;
    }
}

class IfConditionThenStatement extends Statement {
    constructor(ifStatement) {
        super();
        this.ifStatement = ifStatement;
    }

    ELSE(... statements) {
        this.ifStatement.falseBranchStatement = new SequentialStatementGroup(statements);
        return this.ifStatement;
    }

    run(scopeContext) {
        return this.ifStatement.run(scopeContext);
    }
}

const IF = function(expr) {
    return new IfConditionNode(expr);
}

module.exports = IF;
