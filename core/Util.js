import Statement from './Statement';
import ScopeContext from './ScopeContext';

/** 
 * deprecated 
 **/
export function isPromise(value) {
    return (typeof(value) === 'object' &&
        typeof(value.then) === 'function' &&
        typeof(value.catch) === 'function');
}

function executeStatementWithContext(statement, scopeContext) {
    if (statement instanceof Statement) {
        try {
            return statement.run(scopeContext);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    // when statement is a function, it can choose to take 0 or 1 argument
    if (statement && statement.constructor && statement.call && statement.apply && statement.length <= 1) {
        try {
            return statement(scopeContext.accessor);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    return statement;
}

export function executeStatement(statement, parentScopeContext) {
    let effectiveScopeContext = (statement instanceof Statement) ? 
        (statement.requireNewScopeContext() ? new ScopeContext(parentScopeContext) : parentScopeContext) : parentScopeContext;

    return executeStatementWithContext(statement, effectiveScopeContext);
}

export function executeProgram(statement) {
    return executeStatementWithContext(statement, new ScopeContext(null));
}

/**
 * So far, there is no way to get an already resolved promise's value synchronously,
 * I wish the Promise/A+ spec has this included, for now, just call requireValue
 * then you can access the .value field.
 */
export function requireValue(promise) {
    promise.then((resolvedValue) => { promise.value = resolvedValue; });
    return promise;
}

export function SLEEP(duration) {
    return function() {
        return (new Promise((resolve, reject) => {
            setTimeout(resolve, duration);
        }));
    }
}

// produce a function that takes promise as input
// if requireCallback is true, then the last argument of requireCallback is 
// a callback(error, result)
export function promisify(func, requireCallback) {
    return function() {
        if (!requireCallback) {
            return Promise.all(arguments).then((resolvedArguments) => {
                return func.apply(null, resolvedArguments)
            });
        }

        // TODO: use slice for to speed up, sometimes, argument is "array like", not exactly
        //       array
        let newArgs = new Array(arguments.length + 1);
        for (let i = 0; i < arguments.length; i ++) {
            newArgs[i] = arguments[i];
        }


        return Promise.all(newArgs).then(
            (newResolvedArgs) => {
                return new Promise((resolve, reject)=>{
                    newResolvedArgs[arguments.length] = function(err, result) {
                        if (err) {
                            reject(err);
                            return ;
                        }
                        resolve(result);
                    };
                    func.apply(null, newResolvedArgs);
                }); 
            }
        );
    }
}

export function transform(value, transformer) {
    return Promise.resolve(value).then((resolvedValue) => {
        return transformer(resolvedValue);
    });
}
