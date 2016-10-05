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

let appMain = SEQ(
    LET("sum", 0),                                       // let sum = 0;
    FOR(                                                 // for (
        LET("i", 0),                                     //     let i = 0,
        ({i}) => C.le(i, 10),                            //     i <= 10,
        (local) => local.i = C.add(local.i, 1),          //     i = i + 1 
    ).DO(                                                // ) {
        (local) => local.sum = C.add(local.sum, local.i) //     sum = sum + i;
    ),                                                   // }
    ({sum}) => { printf('sum=%d', sum); }                // printf('sum=%d', sum);
);

/**
 * Since sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
 * 
 * Output: 
 * sum=55
 * Done
 */
run(appMain);