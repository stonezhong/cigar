const Util = require('./Util');
const Statement = require('./Statement');
const executeStatement = Util.executeStatement;

class ParallelStatementGroup extends Statement {
    constructor(statements) {
        super();
        this.statements = statements;
    }

    requireNewScopeContext() {
        return true;   
    }

    run(scopeContext) {
        let returnValues = new Array(this.statements.length);
        for (let i = 0; i < this.statements.length; i ++) {
            returnValues[i] = Promise.resolve(executeStatement(this.statements[i], scopeContext));
        }
        return Promise.all(returnValues).then(
            (resolvedReturnValues) => {
                return Promise.resolve(undefined);
            }
        );
    }
}

module.exports = ParallelStatementGroup;
