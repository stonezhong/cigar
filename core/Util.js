import Statement from './Statement';

export function isPromise(value) {
    return (typeof(value) === 'object' &&
        typeof(value.then) === 'function' &&
        typeof(value.catch) === 'function');
}


export function getValue(value) {
    if (value instanceof Statement) {
        return value.run();
    }
    if (value && value.constructor && value.call && value.apply && value.length == 0) {
        return value();
    }

    return value;
}

export function executeStatement(statement) {
    if (statement instanceof Statement) {
        return statement.run();
    }

    if (statement && statement.constructor && statement.call && statement.apply && statement.length == 0) {
        return statement();
    }

    return Promise.resolve(undefined);
}
