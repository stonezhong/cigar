import * as C from 'cigar';
import { run, printf } from './common';

/**
 * This example shows how to use FOR to run bunch of statements
 * sequentially
 * 
 * Syntax:
 * FOR(initExpr, conditionExpr, stepExpr).DO(... statements)
 * 
 */

var i;
var sum;
let appMain = SEQ(
    FOR(
        () => { i = 0; sum = 0; },              // initialize for the FOR statement
        () => { return C.le(i, 10); },          // check condition for the FOR statement, this expression can be asynchronous as C.le returns a promise
        () => { i = C.add(i, 1); return i; },   // step expression for the FOR statement, this expression can be asynchronous as C.add returns a promise
    ).DO(
        () => { sum = C.add(sum, i); return sum; }  // the body for the FOR statement, this statement can be asynchronous as C.add returns a promise
    ),
    () => { printf('sum=%d', sum); }
);

/**
 * Since sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
 * 
 * Output: 
 * sum= 55
 * Done
 */
run(appMain);