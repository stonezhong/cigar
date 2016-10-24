// Replace local variable when they gets resolved
// 
// syntax: 
// SYNC(["foo", "bar"])

const Util = require('./Util');
const Statement = require('./Statement');
const executeStatement = Util.executeStatement;

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


const SYNC = function(propertyName, expression) {
    return new SyncStatement(propertyName, expression);
}

module.exports = SYNC;
