var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest, runTestAndExpectError } from './common.js';

// TRY...FINALLY...

describe('TRY...FINALLY...', function() {
    describe('When try block does not throw exception', function() {
        describe('When finally block does not throw exception', function() {
            it('execute the finally block and does not surface exception', function(done) {
                let a = "";

                runTest(
                    TRY(
                        () => { a += 'A'; },
                        () => { a += 'B'; },
                        () => { a += 'C'; },
                    ).FINALLY(
                        (e) => { a += 'D'; }
                    ),
                    done,
                    () => {
                        expect(a).to.equal("ABCD");
                    }
                );
            });
        });

        describe('When finally block throws exception', function() {
            it('execute the finally block and surface exception', function(done) {
                let a = "";

                runTestAndExpectError(
                    TRY(
                        () => { a += 'A'; },
                        () => { a += 'B'; },
                        () => { a += 'C'; },
                    ).FINALLY(
                        () => { a += 'D'; },
                        THROW(new Error('Oops')),
                        () => { a += 'E'; },
                    ),
                    done,
                    () => {
                        expect(a).to.equal("ABCD");
                    },
                    Error, "Oops"
                );
            });
        });
    });

    describe('When try block throws exception', function() {
        describe('When finally block does not throw exception', function() {
            it('execute the finally block and surface exception', function(done) {
                let a = "";

                runTestAndExpectError(
                    TRY(
                        () => { a += 'A'; },
                        () => { a += 'B'; },
                        THROW(new Error('Oops')),
                        () => { a += 'C'; },
                    ).FINALLY(
                        () => { a += 'D'; },
                        () => { a += 'E'; },
                    ),
                    done,
                    () => {
                        expect(a).to.equal("ABDE");
                    },
                    Error, "Oops"
                );
            });
        });

        describe('When finally block throws exception', function() {
            it('execute the finally block and surface the new exception', function(done) {
                let a = "";

                runTestAndExpectError(
                    TRY(
                        () => { a += 'A'; },
                        () => { a += 'B'; },
                        THROW(new Error('Oops')),
                        () => { a += 'C'; },
                    ).FINALLY(
                        () => { a += 'D'; },
                        THROW(new Error('Oops2')),
                        () => { a += 'E'; },
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
});
