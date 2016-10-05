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
    LET("x"),                                       // let x;
    LET("y", 6),                                    // let y = 6;
    (local) => local.x = C.add(3, 4),               // x = add(3, 4);
    IF(({x}) => C.ge(x, 6)).                        // if (x >= 6) {
        THEN(({x}) => printf("%d is too big", x)).  //     printf("%d is too big", x); }
        ELSE(({x}) => printf("x is ok")),           // } else { printf("%d is ok", x); }
    ({x}) => { printf('x=%d', x); }
);

/**
 * Since 7 >= 6
 * 
 * Output: 
 * 7 is too big
 * x=7
 * Done
 */
run(appMain);
