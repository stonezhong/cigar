import * as C from 'cigar';
import { run, printf } from './common';

/**
 * This example shows how to use SEQ to run bunch of statements
 * sequentially
 * 
 * Syntax:
 * SEQ(... statements)
 * 
 */

var x, y;
var sum;
let appMain = SEQ(
    () => { x = C.add(1, 2); return x;},
    () => { y = C.add(3, 4); return y;},
    () => { sum = C.add(x, y); return sum;},
    () => { printf('sum=%d', sum); }
);

/**
 * sum = (1 + 2) + (3 + 4)
 * 
 * Output: 
 * sum= 10
 * Done
 */
run(appMain);