export function add(... args) {
    return Promise.all(args.map((arg) => Promise.resolve(arg))).
        then(
            (values) => {
                return Promise.resolve(values.reduce((pv, cv) => pv + cv, 0));
            }
        );
}

export function ge(a, b) {
    return Promise.all([Promise.resolve(a), Promise.resolve(b)]).then(
        (values) => {
            return Promise.resolve(values[0] >= values[1]);
        }
    );
}

export function g(a, b) {
    return Promise.all([Promise.resolve(a), Promise.resolve(b)]).then(
        (values) => {
            return Promise.resolve(values[0] > values[1]);
        }
    );
}

export function le(a, b) {
    return Promise.all([Promise.resolve(a), Promise.resolve(b)]).then(
        (values) => {
            return Promise.resolve(values[0] <= values[1]);
        }
    );
}

export function l(a, b) {
    return Promise.all([Promise.resolve(a), Promise.resolve(b)]).then(
        (values) => {
            return Promise.resolve(values[0] < values[1]);
        }
    );
}

export function eq(a, b) {
    return Promise.all([Promise.resolve(a), Promise.resolve(b)]).then(
        (values) => {
            return Promise.resolve(values[0] === values[1]);
        }
    );
}

export function ne(a, b) {
    return Promise.all([Promise.resolve(a), Promise.resolve(b)]).then(
        (values) => {
            return Promise.resolve(values[0] !== values[1]);
        }
    );
}

export function mod(a, b) {
    return Promise.all([Promise.resolve(a), Promise.resolve(b)]).then(
        (values) => {
            return Promise.resolve(values[0] % values[1]);
        }
    );
}
