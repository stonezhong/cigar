import cigar from 'cigar';
import { run, add, log } from './common';

/**
 * This example shows how to use BREAK statement for break out from a loop
 * 
 * Syntax:
 * BREAK
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
        () => { sum = C.add(sum, i); return sum; },  // the body for the FOR statement, this statement can be asynchronous as C.add returns a promise
        IF(() => C.ge(i, 5)).THEN(BREAK),            // if i reaches 5, break out
    ),
    () => { log('sum=', sum); }
);

/**
 * Since sum = 1 + 2 + 3 + 4 + 5
 * 
 * Output: 
 * sum= 15
 * Done
 */
run(appMain);
