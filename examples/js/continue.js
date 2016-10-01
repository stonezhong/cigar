import * as C from 'cigar';
import { run, printf } from './common';

/**
 * This example shows how to use CONTINUE statement to shortcut the loop body
 * 
 * Syntax:
 * CONTINUE
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
        IF(
            () => C.eq(C.mod(i, 2), 0)          // shortcut if i is even number
        ).THEN(CONTINUE),
        () => { sum = C.add(sum, i); return sum; },  // the body for the FOR statement, this statement can be asynchronous as C.add returns a promise
    ),
    () => { printf('sum=%d', sum); }
);

/**
 * Since sum = 1 + 3 + 5 + 7 + 9
 * 
 * Output: 
 * sum= 25
 * Done
 */
run(appMain);
