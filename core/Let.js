// Define a local variable with possible initial value
// 
// syntax: 
// LET(variableName, initValue)
// LET(variableName)

import {executeStatement} from './Util';
import Statement from './Statement';

class LetStatement extends Statement {
    constructor(variableName, expression) {
        super();
        this.variableName = variableName;
        this.expression = expression;
    }

    run(scopeContext) {
        let variableValue = executeStatement(this.expression, scopeContext);
        scopeContext.ctx[this.variableName] = variableValue;
        scopeContext.defineVariable(this.variableName);
        return Promise.resolve(variableValue);
    }
}


let LET = function(propertyName, expression) {
    return new LetStatement(propertyName, expression);
}


module.exports = LET;

