import cigar from 'cigar';
import { run } from './common';

/**
 * This is a "Hello world" example for using Cigar
 * 
 */

let appMain = SEQ(
    () => {
        console.log("Hello, world");
    }
);

/**
 * Output: 
 * Hello, world
 * Done
 */
run(appMain);
