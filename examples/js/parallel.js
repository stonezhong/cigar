import * as C from 'cigar';
import { run, printf } from './common';

/**
 * This demo shows you can create "fiber" -- each has it's own context and runs in parallel.
 * 
 */

let task1 = SEQ(
    LET("i", 0),                                        // let i = 0;
    WHILE(({i}) => i <= 5 ).                            // while (i <= 5)            
    DO(                                                 // {
        ({i}) => printf('from task 1: i = %d', i),      //     printf('from task 1: i = %d', i); 
        SLEEP(1000),                                    //     sleep(1000);
        (local) => { local.i ++ }                       //     i ++;
    )                                                   // }
);


let task2 = SEQ(
    LET("i", 0),                                        // let i = 0;
    WHILE(({i}) => i <= 3 ).                            // while (i <= 3)
    DO(                                                 // {
        ({i}) => printf('from task 2: i = %d', i),      //     printf('from task 2: i = %d', i);
        SLEEP(1500),                                    //     sleep(1500);
        (local) => { local.i ++ }                       //     i ++;
    )                                                   // }
);
 

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
