import { promisify } from './Util';

export function add(... args) {
    return args.reduce((pv, cv) => pv + cv, 0);
}

export function mul(... args) {
    return args.reduce((pv, cv) => pv * cv, 1);
}
