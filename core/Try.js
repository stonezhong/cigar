// Syntax: TRY(... statements).CATCH(exception handler).FINALLY(... statements)
// Syntax: TRY(... statements).FINALLY(... statements)

const Util = require('./Util');
const Statement = require('./Statement');
const SequentialStatementGroup = require('./SequentialStatementGroup');
const executeStatement = Util.executeStatement;

class TryCatchFinallyStatement extends Statement {
    // tryBlock
    // catchBlock
    // finallyBlock
    constructor(tryBlock) {
        super();
        this.tryBlock = tryBlock;
    }

    invokeCatchBlock(e) {
        if (this.catchBlock) {
            try {
                // user may throw an error by returning a rejected promise
                return Promise.resolve(this.catchBlock(e));
            } catch(e) {
                // catch block synchronous error
                return Promise.reject(e); 
            }
        }

        // if there is no catch block, surface the error
        return Promise.reject(e);
    }

    handleError(e, scopeContext) {
        let catchPromise;

        // if there is no catch block
        return this.invokeCatchBlock(e).then(
            () => {
                // catch block  absorbed the exception
                return Promise.resolve(executeStatement(this.finallyBlock, scopeContext));
            },
            (ee) => {
                // catch blow did not absorb the exception
                return Promise.resolve(executeStatement(this.finallyBlock, scopeContext)).then(
                    () => {
                        // finally block did not blow up
                        return Promise.reject(ee);
                    }
                );
            }
        );
    }

    run(scopeContext) {
        return Promise.resolve(executeStatement(this.tryBlock, scopeContext)).then(
            () => {
                return Promise.resolve(executeStatement(this.finallyBlock, scopeContext));
            },
            (e) => {
                return this.handleError(e, scopeContext);
            }
        );
    }
}

class TryNode {
    constructor(tryBlock) {
        this.tryCatchFinallyStatement = new TryCatchFinallyStatement(tryBlock);
    }

    CATCH(catchBlock) {
        this.tryCatchFinallyStatement.catchBlock = catchBlock;
        return new TryCatchNode(this.tryCatchFinallyStatement);
    }

    FINALLY(... finallyBlock) {
        this.tryCatchFinallyStatement.finallyBlock = new SequentialStatementGroup(finallyBlock);
        return this.tryCatchFinallyStatement;
    }
}

class TryCatchNode extends Statement {
    constructor(tryCatchFinallyStatement) {
        super();
        this.tryCatchFinallyStatement = tryCatchFinallyStatement;
    }

    FINALLY(... finallyBlock) {
        this.tryCatchFinallyStatement.finallyBlock = new SequentialStatementGroup(finallyBlock);
        return this.tryCatchFinallyStatement;
    }

    run(scopeContext) {
        return this.tryCatchFinallyStatement.run(scopeContext);
    }
}

const TRY = function(... statements) {
    return new TryNode(new SequentialStatementGroup(statements));
}

module.exports = TRY;
