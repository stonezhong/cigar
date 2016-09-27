// Syntax
// WHILE (condition expression).DO(... statements)

import {isPromise, executeStatement} from './Util';
import Statement from './Statement';
import SequentialStatementGroup from './SequentialStatementGroup';
import BreakError from './BreakError';
import ContinueError from './ContinueError';

class WhileStatement extends Statement {
    // conditionExpr;
    // bodyStatement;

    constructor(conditionExpr) {
        super();
        this.conditionExpr = conditionExpr;
        this.run = this.run.bind(this);
    }

    run() {
        return Promise.resolve(executeStatement(this.conditionExpr)).then(
            (resolvedConditionValue) => {
                if (!resolvedConditionValue) {
                    return Promise.resolve(undefined);
                }
                return Promise.resolve(executeStatement(this.bodyStatement)).then(
                    this.run,
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

let WHILE = function(conditionExpr) {
    return new WhlieConditionNode(conditionExpr);
}

module.exports = WHILE;

