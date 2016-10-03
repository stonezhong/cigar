var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest, runTestAndExpectError } from './common.js';

// TRY...CATCH...FINALLY...

describe('TRY...CATCH...FINALLY...', function() {
    describe('When try block does not throw exception', function() {
        describe('When finally block does not throw exception', function() {
            it('execute the finally block and bypass the catch block and does not surface exception', function(done) {
                let a = "";

                runTest(
                    TRY(
                        () => { a += 'A'; },
                        () => { a += 'B'; },
                        () => { a += 'C'; },
                    ).CATCH((e) => {
                        a += 'D';
                    }).FINALLY(
                        (e) => { a += 'E'; }
                    ),
                    done,
                    () => {
                        expect(a).to.equal("ABCE");
                    }
                );
            });
        });

        describe('When finally block throws throw exception', function() {
            it('execute the finally block and bypass the catch block and surface exception', function(done) {
                let a = "";

                runTestAndExpectError(
                    TRY(
                        () => { a += 'A'; },
                        () => { a += 'B'; },
                        () => { a += 'C'; },
                    ).CATCH((e) => {
                        a += 'D';
                    }).FINALLY(
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
        describe('When catch block suppressed the exception', function() {
            describe('When finally block does not throw exception', function() {
                it('execute the catch block and then finally block and does not surface exception', function(done) {
                    let a = "";

                    runTest(
                        TRY(
                            () => { a += 'A'; },
                            () => { a += 'B'; },
                            THROW(new Error('Oops')),
                            () => { a += 'C'; },
                        ).CATCH((e) => {
                            a += 'D';
                        }).FINALLY(
                            (e) => { a += 'E'; }
                        ),
                        done,
                        () => {
                            expect(a).to.equal("ABDE");
                        }
                    );
                });
            });

            describe('When finally block throws exception', function() {
                it('execute the catch block and finally block and surface new exception', function(done) {
                    let a = "";

                    runTestAndExpectError(
                        TRY(
                            () => { a += 'A'; },
                            () => { a += 'B'; },
                            THROW(new Error('Oops')),
                            () => { a += 'C'; },
                        ).CATCH((e) => {
                            a += 'D';
                        }).FINALLY(
                            () => { a += 'E'; },
                            THROW(new Error('Oops2')),
                            () => { a += 'F'; },
                        ),
                        done,
                        () => {
                            expect(a).to.equal("ABDE");
                        },
                        Error, "Oops2"
                    );
                });
            });
        });

        describe('When catch block throws new exception', function() {
            describe('When finally block does not throw exception', function() {
                it('execute the catch block and finally block and surface new exception', function(done) {
                    let a = "";

                    runTestAndExpectError(
                        TRY(
                            () => { a += 'A'; },
                            () => { a += 'B'; },
                            THROW(new Error('Oops')),
                            () => { a += 'C'; },
                        ).CATCH((e) => {
                            a += 'D';
                            throw new Error('Oops2');
                        }).FINALLY(
                            () => { a += 'E'; },
                        ),
                        done,
                        () => {
                            expect(a).to.equal("ABDE");
                        },
                        Error, "Oops2"
                    );
                });
            });

            describe('When finally block throws exception', function() {
                it('execute the catch block and finally block and surface new exception', function(done) {
                    let a = "";

                    runTestAndExpectError(
                        TRY(
                            () => { a += 'A'; },
                            () => { a += 'B'; },
                            THROW(new Error('Oops')),
                            () => { a += 'C'; },
                        ).CATCH((e) => {
                            a += 'D';
                            throw new Error('Oops2');
                        }).FINALLY(
                            () => { a += 'E'; },
                            THROW(new Error('Oops3')),
                            () => { a += 'F'; },
                        ),
                        done,
                        () => {
                            expect(a).to.equal("ABDE");
                        },
                        Error, "Oops3"
                    );
                });
            });
        });
    });
});
