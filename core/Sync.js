// Replace local variable when they gets resolved
// 
// syntax: 
// SYNC(["foo", "bar"])

import {executeStatement} from './Util';
import Statement from './Statement';

class SyncStatement extends Statement {
    constructor(... varNames) {
        super();
        this.varNames = varNames;
    }

    run(scopeContext) {
        let vars = new Array(this.varNames.length);
        for (let i = 0; i < vars.length; i ++) {
            vars[i] = scopeContext.accessor[this.varNames[i]];
        }
        return Promise.all(vars).then((resolvedVars)=>{
            for (let i = 0; i < vars.length; i ++) {
                scopeContext.accessor[this.varNames[i]] = resolvedVars[i];
            }
        });
    }
}


let SYNC = function(propertyName, expression) {
    return new SyncStatement(propertyName, expression);
}

module.exports = SYNC;
