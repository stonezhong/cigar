// syntax: 
// IF (condition expression).THEN(... statements);
// IF (condition expression).THEN(... statements).ELSE(... statements);

import {isPromise, executeStatement} from './Util';
import Statement from './Statement';
import SequentialStatementGroup from './SequentialStatementGroup';

class IfStatement extends Statement {
    // conditionExpr;
    // trueBranchStatement;
    // falseBranchStatement;
    constructor(conditionExpr) {
        super();
        this.conditionExpr = conditionExpr;
    }

    runWithResolvedCondition(resolvedConditionValue) {
        if (resolvedConditionValue) {
            return executeStatement(this.trueBranchStatement);
        } else {
            return executeStatement(this.falseBranchStatement);
        }
    }

    run() {
        return Promise.resolve(executeStatement(this.conditionExpr)).then(
            (resolvedConditionValue) => {
                return this.runWithResolvedCondition(resolvedConditionValue); 
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

    run() {
        return this.ifStatement.run();
    }
}

let IF = function(expr) {
    return new IfConditionNode(expr);
}

module.exports = IF;
