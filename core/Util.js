import Statement from './Statement';

/** 
 * deprecated 
 **/
export function isPromise(value) {
    return (typeof(value) === 'object' &&
        typeof(value.then) === 'function' &&
        typeof(value.catch) === 'function');
}

export function executeStatement(statement) {
    if (statement instanceof Statement) {
        return statement.run();
    }

    if (statement && statement.constructor && statement.call && statement.apply && statement.length == 0) {
        return statement();
    }

    return statement;
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
