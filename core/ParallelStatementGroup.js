import {executeStatement} from './Util';
import Statement from './Statement';

export default class ParallelStatementGroup extends Statement {
    constructor(statements) {
        super();
        this.statements = statements;
    }

    run() {
        let returnValues = new Array(this.statements.length);
        for (let i = 0; i < this.statements.length; i ++) {
            returnValues[i] = Promise.resolve(executeStatement(this.statements[i]));
        }
        return Promise.all(returnValues).then(
            (resolvedReturnValues) => {
                return Promise.resolve(undefined);
            }
        );
    }
}
