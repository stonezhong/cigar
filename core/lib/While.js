// Syntax
// WHILE (condition expression).DO(... statements)

const Util = require('./Util');
const Statement = require('./Statement');
const SequentialStatementGroup = require('./SequentialStatementGroup');
const BreakError = require('./BreakError');
const ContinueError = require('./ContinueError');
const executeStatement = Util.executeStatement;

class WhileStatement extends Statement {
    // conditionExpr;
    // bodyStatement;

    constructor(conditionExpr) {
        super();
        this.conditionExpr = conditionExpr;
    }

    requireNewScopeContext() {
        return true;   
    }

    run(scopeContext) {
        return Promise.resolve(executeStatement(this.conditionExpr, scopeContext)).then(
            (resolvedConditionValue) => {
                if (!resolvedConditionValue) {
                    return Promise.resolve(undefined);
                }
                return Promise.resolve(executeStatement(this.bodyStatement, scopeContext)).then(
                    () => {
                        return this.run(scopeContext);
                    },
                    (error) => {
                        if (error instanceof BreakError) {
                            return Promise.resolve(undefined);
                        }
                        if (error instanceof ContinueError) {
                            return this.run(scopeContext);
                        }
                        throw error; // unhandled error
                    }
                );
            }
        );
    }
}

class WhlieConditionNode {
    constructor(conditionExpr) {
        this.whileStatement = new WhileStatement(conditionExpr);
    }
    
    DO(... statements) {
        this.whileStatement.bodyStatement = new SequentialStatementGroup(statements);
        return this.whileStatement;
    }
}

const WHILE = function(conditionExpr) {
    return new WhlieConditionNode(conditionExpr);
}

module.exports = WHILE;

