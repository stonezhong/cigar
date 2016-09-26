import cigar from 'cigar';
import { run, add, log } from './common';

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
        () => { console.log("step 1"); },
        () => { console.log("step 2"); },
        THROW("i am bored"),
        () => { console.log("step 3"); },           // you won't see "step 3" gets printed since we throw exception in the line above
    ).
    CATCH(
        (e) => {
            console.log(`Caught exception: ${e}`);   // we are absorbing the exception since we didn't throw new exception
        }
    ).
    FINALLY(
        () => { console.log("Well, my job is done"); },
    ); 

/**
 * Output: 
 * step 1
 * step 2
 * Caught exception: i am bored
 * Well, my job is done
 * Done
 */
run(appMain);
