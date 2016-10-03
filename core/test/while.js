var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest } from './common.js';

describe('WHILE...DO... statement', function() {
    it('execute the body 3 times', function(done) {
        let a = "";
        let i = 0;


        runTest(
            WHILE(() => { return i < 3;}).
            DO(
                () => { a = a + i; },
                () => { i ++; }
            ),
            done,                
            () => {
                expect(a).to.equal("012");
            }
        );
    });

});
