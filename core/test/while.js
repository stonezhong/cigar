var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest, runTestAndExpectError } from './common.js';

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

    describe('when condition expression throws exception', function() {
        it('bypass the body and surface the exception', function(done) {
            let a = "";

            runTestAndExpectError(
                WHILE(() => { a += 'A'; throw new Error("Oops"); a += 'B'; return true;}).
                DO(
                    () => { a += 'C'; }
                ),
                done,                
                () => {
                    expect(a).to.equal("A");
                },
                Error, "Oops"
            );
        });
    });

    describe('when body throws exception', function() {
        it('bypass the condition expression and surface the exception', function(done) {
            let a = "";

            runTestAndExpectError(
                WHILE(() => { a += 'A'; return true;}).
                DO(
                    () => { a += 'B'; },
                    THROW(new Error("Oops")),
                    () => { a += 'C'; },
                ),
                done,                
                () => {
                    expect(a).to.equal("AB");
                },
                Error, "Oops"
            );
        });
    });

});
