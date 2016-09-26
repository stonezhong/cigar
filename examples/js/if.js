import cigar from 'cigar';
import { run, add, log } from './common';

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
        THEN(() => { console.log("x is too big"); }).
        ELSE(() => { console.log("x is ok"); }),
    () => { log('x=', x); }
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
