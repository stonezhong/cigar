import * as C from 'cigar';
import { run, printf } from './common';

/**
 * This example shows how IF statement works
 * 
 * Syntax:
 * IF(expr).THEN(statement).ELSE(statement)
 * 
 */

var x;
var y;

let appMain = SEQ(
    () => { x = C.add(3, 4); return x;},
    
    IF(
        () => C.ge(x, 6)
    ).
        THEN(() => { printf("x is too big"); }).
        ELSE(() => { printf("x is ok"); }),
    () => { printf('x=%d', x); }
);

/**
 * Since 7 >= 6
 * 
 * Output: 
 * x is too big
 * x= 7
 * Done
 */
run(appMain);
