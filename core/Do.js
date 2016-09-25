// Syntax
// DO(statement).WHILE(conditionExpr)

import {isPromise, getValue, executeStatement} from './Util';
import Statement from './Statement';
import SequentialStatementGroup from './SequentialStatementGroup';
import BreakError from './BreakError';
import ContinueError from './ContinueError';

class DoWhileStatement extends Statement {
    // conditionExpr;
    // bodyStatement;

    constructor(statement) {
        super();
        this.bodyStatement = statement;
        this.run = this.run.bind(this);
    }

    run() {
        return Promise.resolve(executeStatement(this.bodyStatement)).then(
            () => {
                return Promise.resolve(getValue(this.conditionExpr)).then(
                    (resolvedConditionValue) => {
                        if (!resolvedConditionValue) {
                            return Promise.resolve(undefined);
                        }
                        return this.run();
                    }
                );
            },
            (error) => {
                if (error instanceof BreakError) {
                    return Promise.resolve(undefined);
                }
                if (error instanceof ContinueError) {
                    return this.run();
                }
                return error; // unhandled error
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

let DO = function(... statements) {
    return new DoWhileBodyNode(new SequentialStatementGroup(statements));
}

module.exports = DO;

