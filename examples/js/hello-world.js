import * as C from 'cigar';
import { run, printf } from './common';

/**
 * This is a "Hello world" example for using Cigar
 * 
 */

let appMain = SEQ(
    () => {
        printf("Hello, world");
    }
);

/**
 * Output: 
 * Hello, world
 * Done
 */
run(appMain);
