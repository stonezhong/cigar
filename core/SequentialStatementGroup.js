const Util = require('./Util');
const Statement = require('./Statement');
const executeStatement = Util.executeStatement;

class SequentialStatementGroup extends Statement {
    constructor(statements) {
        super();
        this.statements = statements;
    }

    requireNewScopeContext() {
        return true;   
    }

    run(scopeContext) {
        return this.runWithIndex(0, scopeContext);
    }

    runWithIndex(index, scopeContext) {
        if (index >= this.statements.length) {
            return Promise.resolve(undefined);
        }

        return Promise.resolve(executeStatement(this.statements[index], scopeContext)).then(
            () => {
                return this.runWithIndex(index + 1, scopeContext);
            }
        );
    }
}

module.exports = SequentialStatementGroup;
