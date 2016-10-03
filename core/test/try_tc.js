var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest, runTestAndExpectError } from './common.js';

// TRY...CATCH...

describe('TRY...CATCH...', function() {
    describe('When try block throws exception', function() {
        describe('When catch block suppressed the exception', function() {
            it('it does not surface the exception', function(done) {
                let a = "";

                runTest(
                    TRY(
                        () => { a += 'A'; },
                        () => { a += 'B'; },
                        THROW(new Error('Oops')),
                        () => { a += 'C'; },
                    ).CATCH(
                        (e) => { a += 'D'; }
                    ),
                    done,
                    () => {
                        expect(a).to.equal("ABD");
                    }
                );
            });
        });

        describe('When catch block throws new exception', function() {
            it('it surface the new exception', function(done) {
                let a = "";

                runTestAndExpectError(
                    TRY(
                        () => { a += 'A'; },
                        () => { a += 'B'; },
                        THROW(new Error('Oops')),
                        () => { a += 'C'; },
                    ).CATCH(
                        (e) => {
                            a += 'D'; 
                            throw new Error("Oops2");
                            a += 'E'; 
                        }
                    ),
                    done,
                    () => {
                        expect(a).to.equal("ABD");
                    },
                    Error, "Oops2"
                );
            });
        });
    });

    describe('When try block does not throw exception', function() {
        it('does not execute the catch block and does not surface exception', function(done) {
            let a = "";

            runTest(
                TRY(
                    () => { a += 'A'; },
                    () => { a += 'B'; },
                    () => { a += 'C'; },
                ).CATCH(
                    (e) => { a += 'D'; }
                ),
                done,
                () => {
                    expect(a).to.equal("ABC");
                }
            );
        });
    });
});
