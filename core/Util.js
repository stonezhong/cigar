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

export function executeStatementWithContext(statement, scopeContext) {
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
    return executeStatementWithContext(
        statement, 
        new ScopeContext(parentScopeContext)
    );
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

export function promisify(func) {
    return function() {
        // sometimes arguments is not array, so map cannot be uses
        let argumentPromises = new Array(arguments.length);
        for (let i = 0; i < arguments.length; i ++) {
            argumentPromises[i] = Promise.resolve(arguments[i]);
        }
        return Promise.all(argumentPromises).
            then(
                (resolvedArgs) => {
                    return func.apply(null, resolvedArgs);
                }
            );
    }
}

export function transform(value, transformer) {
    return Promise.resolve(value).then((resolvedValue) => {
        return transformer(resolvedValue);
    });
}
