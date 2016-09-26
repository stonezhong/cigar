import Statement from './Statement';

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
