// Syntax: TRY(... statements).CATCH(exception handler).FINALLY(... statements)
// Syntax: TRY(... statements).FINALLY(... statements)

import {isPromise, executeStatement} from './Util';
import Statement from './Statement';
import SequentialStatementGroup from './SequentialStatementGroup';

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

    handleError(e) {
        let catchPromise;

        // if there is no catch block
        return this.invokeCatchBlock(e).then(
            () => {
                // catch block  absorbed the exception 
                return Promise.resolve(executeStatement(this.finallyBlock));
            },
            (ee) => {
                // catch blow did not absorb the exception
                return Promise.resolve(executeStatement(this.finallyBlock)).then(
                    () => {
                        // finally block did not blow up
                        return Promise.reject(ee);
                    }
                );
            }
        );
    }

    run() {
        let tryPromise;

        try {
            tryPromise = executeStatement(this.tryBlock);
        } catch (e) {
            // we have synchronous error
            return this.handleErrror(e);
        }

        return Promise.resolve(tryPromise).then(
            () => {
                // no error, invoke the finally block
                return Promise.resolve(executeStatement(this.finallyBlock));
            },
            (ee) => {
                // we have async error
                return this.handleError(ee);
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

    FINALLY(finallyBlock) {
        this.tryCatchFinallyStatement.finallyBlock = new TryCatchFinallyStatement(finallyBlock);
        return this.tryCatchFinallyStatement;
    }
}

class TryCatchNode extends Statement {
    constructor(tryCatchFinallyStatement) {
        super();
        this.tryCatchFinallyStatement = tryCatchFinallyStatement;
    }

    FINALLY(finallyBlock) {
        this.tryCatchFinallyStatement.finallyBlock = finallyBlock;
        return this.tryCatchFinallyStatement;
    }

    run() {
        return this.tryCatchFinallyStatement.run();
    }
}

let TRY = function(... statements) {
    return new TryNode(new SequentialStatementGroup(statements));
}

module.exports = TRY;
