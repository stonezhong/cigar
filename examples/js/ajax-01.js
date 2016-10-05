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
            data: {x, y},
            dataType: 'json'
        }), ({result}) => result);
    },
    mul: function(x, y) {
        return C.transform($.get({
            url: 'mul.php',
            data: {x, y},
            dataType: 'json'
        }), ({result}) => result);
    },
};

// promisify all APIs
for (let key in API) {
    API[key] = C.promisify(API[key]);
}


let appMain = SEQ(
    LET("a", 2),                                                // let a = 2;                                                                 
    LET("b", 3),                                                // let b = 3;
    LET("c", 4),                                                // let c = 4;
    LET("d", 5),                                                // let d = 5;
    LET("result"),                                              // let result;
    (local) => {
        let {a, b, c, d} = local;
        return (local.result =                                  //  result = mul(add(a, b), add(c, d));
            API.mul(API.add(a, b), API.add(c, d)));
    },
    ({result}) => {
        printf("(%d + %d)*(%d + %d) = %d", 2, 3, 4, 5, result); 
    }
);

/**
 * result = (2 + 3) * (4 + 5)
 * 
 * Output: 
 * (2 + 3)*(4 + 5) = 45
 * Done
 */
run(appMain);
