var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest, runTestAndExpectError } from './common.js';

describe('DO...WHILE... statement', function() {
    it('execute the body 3 times', function(done) {
        let a = "";
        let i = 0;

        runTest(
            DO(
                () => { a = a + i; },
                () => { i ++; }
            ).WHILE(
                () => { return (i < 3); }
            ),
            done,                
            () => {
                expect(a).to.equal("012");
            }
        );
    });

    describe('When body throws exception', function() {
        it('bypass the condition check and suface the exception', function(done) {
            let a = "";
            let i = 0;

            runTestAndExpectError(
                DO(
                    () => { a += 'A'; },
                    THROW(new Error("Oops")),
                    () => { a += 'B'; }
                ).WHILE(
                    () => { return (i < 3); }
                ),
                done,                
                () => {
                    expect(a).to.equal("A");
                },
                Error, "Oops"
            );
        });
    });

    describe('When condition expression throws exception', function() {
        it('bypass the body and suface the exception', function(done) {
            let a = "";
            let i = 0;

            runTestAndExpectError(
                DO(
                    () => { a += 'A'; },
                ).WHILE(
                    () => { a += 'B'; throw new Error('Oops'); a += 'C'; }
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
