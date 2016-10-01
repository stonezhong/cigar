import * as C from 'cigar';
import { run, printf } from './common';

/**
 * This demo shows you can create "fiber" -- each has it's own context and runs in parallel.
 * 
 */

let task1 = (() => {
    let i = 0;
    return SEQ(
        WHILE(() => i <= 5 ).
        DO(
            () => printf('from task 1: i = %d', i),
            SLEEP(1000),
            () => { i ++ }
        ),
        () => { i = 0; }
    );
})();

let task2 = (() => {
    let i = 0;
    return SEQ(
        WHILE(() => i <= 3 ).
        DO(
            () => printf('from task 2: i = %d', i),
            SLEEP(1500),
            () => { i ++ }
        ),
        () => { i = 0; }
    );
})(); 

/**
 * This will launch task1 and task2 in parallel, and once both tasks are completed, appMain will complete.
 */
let appMain = PARA(task1, task2);

/**
 * Output: 
 * from task 1: i = 0                                                                                                                                                          
 * from task 2: i = 0                                                                                                                                                          
 * from task 1: i = 1                                                                                                                                                          
 * from task 2: i = 1                                                                                                                                                          
 * from task 1: i = 2                                                                                                                                                          
 * from task 2: i = 2                                                                                                                                                          
 * from task 1: i = 3                                                                                                                                                          
 * from task 1: i = 4                                                                                                                                                          
 * from task 2: i = 3                                                                                                                                                          
 * from task 1: i = 5      
 * Done
 */
run(appMain);
