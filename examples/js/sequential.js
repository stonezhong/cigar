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

let appMain = SEQ(
    LET("x", C.add(1, 2)),                  // let x = 1 + 2;
    LET("y", C.add(3, 4)),                  // let y = 3 + 4;
    LET("sum", ({x, y}) => C.add(x, y)),    // let sum = x + y;
    ({sum}) => { printf('sum=%d', sum); }   // printf('sum=%d', sum);
);

/**
 * sum = (1 + 2) + (3 + 4)
 * 
 * Output: 
 * sum=10
 * Done
 */
run(appMain);