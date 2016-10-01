import * as C from 'cigar';
import { run, printf } from './common';

/**
 * This example shows how to use TRY...CATCH...FINALLY to handle exceptions
 * 
 * Syntax:
 * TRY(... statements).CATCH(exceptionHandler).FINALLY(finallyBlock)
 * TRY(... statements).FINALLY(finallyBlock)
 * THROW(exception)
 * 
 */

let appMain = 
    TRY(
        () => { printf("step 1"); },
        () => { printf("step 2"); },
        THROW("i am bored"),
        () => { printf("step 3"); },           // you won't see "step 3" gets printed since we throw exception in the line above
    ).
    CATCH(
        (e) => {
            return SEQ(
                () => { printf(`Caught exception: ${e}`) },
                // we are throwing out a different exception
                THROW('something wrong happened')
            ).run();
        }
    ).
    FINALLY(
        () => { printf("Well, my job is done"); },
    ); 

/**
 * Output: 
 * step 1
 * step 2
 * Caught exception: i am bored
 * Well, my job is done
 * got error: something wrong happened
 */
run(appMain);
