// Syntax
// FOR(initial expression, condition expression, step expression).DO(... statements);

import {executeStatement} from './Util';
import Statement from './Statement';
import SequentialStatementGroup from './SequentialStatementGroup';
import BreakError from './BreakError';
import ContinueError from './ContinueError';

class ForStatement extends Statement {
    // initExpr;
    // conditionExpr;
    // stepExpr;
    // bodyStatement;

    constructor(initExpr, conditionExpr, stepExpr) {
        super();
        this.initExpr = initExpr;
        this.conditionExpr = conditionExpr;
        this.stepExpr = stepExpr;

        this.runLoop = this.runLoop.bind(this);
    }

    requireNewScopeContext() {
        return true;   
    }

    runLoopWithResolvedConditionValue(resolvedConditionValue, scopeContext) {
        if (!resolvedConditionValue) {
            return Promise.resolve(undefined);
        }

        return Promise.resolve(executeStatement(this.bodyStatement, scopeContext)).then(
            () => {
                return Promise.resolve(executeStatement(this.stepExpr, scopeContext)).then(
                    () => {
                        return this.runLoop(scopeContext);
                    }
                );
            }, 
            (error) => {
                if (error instanceof BreakError) {
                    return Promise.resolve(undefined);
                }
                if (error instanceof ContinueError) {
                    return Promise.resolve(executeStatement(this.stepExpr, scopeContext)).then(
                        () => {
                            return this.runLoop(scopeContext);
                        }
                    );
                }
                throw error; // unhandled error
            }
        );
    }

    runLoop(scopeContext) {
        return Promise.resolve(executeStatement(this.conditionExpr, scopeContext)).then((resolvedConditionValue) => {
            return this.runLoopWithResolvedConditionValue(resolvedConditionValue, scopeContext);
        });
    }

    run(scopeContext) {
        return Promise.resolve(executeStatement(this.initExpr, scopeContext)).then(
            () => {
                return this.runLoop(scopeContext);
            }
        );
    }
}

class ForConditionNode {
    constructor(initExpr, conditionExpr, stepExpr) {
        this.forStatement = new ForStatement(initExpr, conditionExpr, stepExpr);
    }

    DO(... statements) {
        this.forStatement.bodyStatement = new SequentialStatementGroup(statements);
        return this.forStatement;
    }
}

let FOR = function(initExpr, conditionExpr, stepExpr) {
    return new ForConditionNode(initExpr, conditionExpr, stepExpr);
}

module.exports = FOR;
