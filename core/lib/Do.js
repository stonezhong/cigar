// Syntax
// DO(...statements).WHILE(condition expression)

const Util = require('./Util');
const Statement = require('./Statement');
const SequentialStatementGroup = require('./SequentialStatementGroup');
const BreakError = require('./BreakError');
const ContinueError = require('./ContinueError');
const executeStatement = Util.executeStatement;

class DoWhileStatement extends Statement {
    // conditionExpr;
    // bodyStatement;

    constructor(statement) {
        super();
        this.bodyStatement = statement;
        this.run = this.run.bind(this);
    }

    requireNewScopeContext() {
        return true;   
    }

    run(scopeContext) {
        return Promise.resolve(executeStatement(this.bodyStatement, scopeContext)).then(
            () => {
                return Promise.resolve(executeStatement(this.conditionExpr, scopeContext)).then(
                    (resolvedConditionValue) => {
                        if (!resolvedConditionValue) {
                            return Promise.resolve(undefined);
                        }
                        return this.run(scopeContext);
                    }
                );
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
}

class DoWhileBodyNode {
    constructor(statement) {
        this.doWhileStatement = new DoWhileStatement(statement);
    }
    
    WHILE(conditionExpr) {
        this.doWhileStatement.conditionExpr = conditionExpr;
        return this.doWhileStatement;
    }
}

const DO = function(... statements) {
    return new DoWhileBodyNode(new SequentialStatementGroup(statements));
}

module.exports = DO;

