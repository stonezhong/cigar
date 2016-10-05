import * as C from 'cigar';
import { run, printf } from './common';

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
    LET("sum", 0),                                          // let sum = 0;
    FOR(                                                    // for (
        LET("i", 0),                                        //     let i = 0,
        ({i}) => C.le(i, 10) ,                              //     i <= 10,
        (local) => local.i = C.add(local.i, 1)              //     i = i + 1
    ).DO(                                                   // ) {
        (local) => local.sum = C.add(local.sum, local.i),   //     sum = sum + i;
        IF(({i}) => C.ge(i, 5)).THEN(BREAK),                //     if (i >= 5) break;
    ),                                                      // }
    ({sum}) => printf('sum=%d', sum)                        // printf("sum=%d", sum);
);

/**
 * Since sum = 1 + 2 + 3 + 4 + 5
 * 
 * Output: 
 * sum= 15
 * Done
 */
run(appMain);
