import {executeStatement} from './Util';
import Statement from './Statement';

export default class SequentialStatementGroup extends Statement {
    constructor(statements) {
        super();
        this.statements = statements;
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
