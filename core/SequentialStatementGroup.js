import {isPromise, executeStatement} from './Util';
import Statement from './Statement';

export default class SequentialStatementGroup extends Statement {
    constructor(statements) {
        super();
        this.statements = statements;
    }

    run() {
        return this.runWithIndex(0);
    }

    runWithIndex(index) {
        if (index >= this.statements.length) {
            return Promise.resolve(undefined);
        }

        return Promise.resolve(executeStatement(this.statements[index])).then(
            () => {
                return this.runWithIndex(index + 1);
            }
        );
    }
}
