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
    LET("sum", 0),                                          // let sum = 0;
    FOR(                                                    // for (
        LET("i", 0),                                        //     let i = 0, 
        ({i}) => C.le(i, 10),                               //     i <= 10,
        (local) => local.i = C.add(local.i, 1),             //     i = i + 1
    ).DO(                                                   // ) {
        IF(({i}) => C.eq(C.mod(i, 2), 0)).THEN(             //     if ((i % 2) == 0) {
            CONTINUE                                        //         continue;
        ),                                                  //     }    
        (local) => local.sum = C.add(local.sum, local.i),   //     sum = sum + i;
    ),                                                      // }
    ({sum}) => { printf('sum=%d', sum); }                   // printf('sum=%d'", sum);
);

/**
 * Since sum = 1 + 3 + 5 + 7 + 9
 * 
 * Output: 
 * sum=25
 * Done
 */
run(appMain);
