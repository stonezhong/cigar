export default class ScopeContext {
    constructor(parent) {
        this.parent = parent;
        this.ctx = {};
        this.accessor = {};
        // copy properties from parent
        if (parent !== null) {
            for (let propertyName in parent.accessor) {
                this.defineVariable(propertyName);
            }
        }
    }

    defineVariable(variableName) {
        Object.defineProperty(this.accessor, variableName, {
            get: () => {
                if (this.ctx.hasOwnProperty(variableName)) {
                    return this.ctx[variableName];
                }
                if (this.parent == null) {
                    // TODO(stonezhong): throw exception
                    return undefined;
                }
                return this.parent.accessor[variableName];
            },
            set: (newValue) => {
                if (this.ctx.hasOwnProperty(variableName)) {
                    this.ctx[variableName] = newValue;
                    return newValue; 
                }
                if (this.parent == null) {
                    // TODO(stonezhong): throw exception
                    return newValue;
                }
                this.parent.accessor[variableName] = newValue;
                return newValue;
            },
            enumerable: true,  // this is required for calling function with destructuring parameter
            configurable: false
        });
    }
}
