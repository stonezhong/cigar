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
    TRY(                                            // try {
        () => printf("step 1"),                     //     printf("step 1");
        () => printf("step 2"),                     //     printf("step 2");
        THROW("Oops"),                              //     throw("Oops");
        () => { printf("step 3"); },                //     printf("step 3");
    ).                                              // }
    CATCH(                                          // catch (e) {
        (e) => {                                    //
            printf(`Caught exception: ${e}`);       //     printf(`Caught exception: ${e}`);
            throw 'Oops2';                          //     throw "Oops2";
        }                                           // 
    ).                                              // }
    FINALLY(                                        // finally {
        () => printf("Well, my job is done")        //     printf("Well, my job is done");
    );                                              // }

/**
 * You see line "got error: Error: something wrong happened" because we throw a new 
 * exception in the catch block.
 * 
 * Output: 
 * step 1
 * step 2
 * Caught exception: Oops
 * Well, my job is done
 * got error: Oops2
 */
run(appMain);
