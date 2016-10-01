import * as C from 'cigar';
import { run, printf } from './common';
import $ from 'jquery';

/**
 * This example shows how to make AJAX call
 * 
 * Both API.add and API.mul are ajax calls, they return promise (as I am using jQuery 3).
 * 
 */

const API = {
    add: function(x, y) {
        return C.transform($.get({
            url: 'add.php',
            data: {x: x, y: y},
            dataType: 'json'
        }), (input) => {
            return input.result;
        });
    },
    mul: function(x, y) {
        return C.transform($.get({
            url: 'mul.php',
            data: {x: x, y: y},
            dataType: 'json'
        }), (input) => {
            return input.result;
        });
    },
};

// promisify all APIs
for (let key in API) {
    API[key] = C.promisify(API[key]);
}


let result;
let appMain = SEQ(
    () => {
        return (result = API.mul(API.add(2, 3), API.add(4, 5)));
    },
    () => {
        printf("(%d + %d)*(%d + %d) = %d", 2, 3, 4, 5, result);
    }
);

/**
 * result = (2 + 3) * (4 + 5)
 * 
 * Output: 
 * sum=45
 * Done
 */
run(appMain);
