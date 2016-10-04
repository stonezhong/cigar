var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest, runTestAndExpectError } from './common.js';

describe('FOR statement', function() {
    it('should run initial expression once', function(done) {
        let a = "";
        runTest(
            FOR(
                () => { a = a + 'i'; },
                () => {},
                () => {}
            ).DO(),
            done,
            () => {
                expect(a).to.equal("i");
            }
        );
    });

    it('should check condition on every loop', function(done) {
        let a = "";
        let b = 0;
        runTest(
            FOR(
                () => { a = a + 'i'; },
                () => { a = a + "?"; return b < 3; },
                () => { a = a + 'S'}
            ).DO(
                () => { a += 'B'; b ++; }
            ),
            done,
            () => {
                expect(a).to.equal("i?BS?BS?BS?");
            }
        );
    });

    it('should shortcut the body upon continue statement', function(done) {
        let a = "";
        let b = 0;
        runTest(
            FOR(
                () => {  },
                () => { return b < 10; },
                () => { b = b + 1; }
            ).DO(
                IF(() => { return (b % 2) == 0; }).THEN(
                    CONTINUE
                ),
                () => { a = a + b; }
            ),
            done,
            () => {
                expect(a).to.equal("13579");
            }
        );
    });

    it('should bail out upon break statement', function(done) {
        let a = "";
        let b = 0;
        runTest(
            FOR(
                () => {  },
                () => { return b < 10; },
                () => { b = b + 1; }
            ).DO(
                IF(() => { return (b == 5); }).THEN(
                    BREAK
                ),
                () => { a = a + b; }
            ),
            done,
            () => {
                expect(a).to.equal("01234");
            }
        );
    });

    describe('When init expression throws exception', function() {
        it('should bypass condition check, step, and body and surface the exception', function(done) {
            let a = "";
            runTestAndExpectError(
                FOR(
                    () => { a += 'A'; throw new Error("Oops"); a += 'B'; },
                    () => { a += 'C'; return false; },
                    () => { a += 'D'; }
                ).DO(
                    () => { a+= 'E'; }
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
        it('should bypass step and body and surface the exception', function(done) {
            let a = "";
            runTestAndExpectError(
                FOR(
                    () => { a += 'A'; },
                    () => { a += 'B'; throw new Error('Oops'); a += 'C'; },
                    () => { a += 'D'; }
                ).DO(
                    () => { a+= 'E'; }
                ),
                done,
                () => {
                    expect(a).to.equal("AB");
                },
                Error, "Oops"
            );
        });
    });

    describe('When body throws exception', function() {
        it('should bypass step and surface the exception', function(done) {
            let a = "";
            runTestAndExpectError(
                FOR(
                    () => { a += 'A'; },
                    () => { a += 'B'; return true; },
                    () => { a += 'C'; }
                ).DO(
                    () => { a+= 'D'; },
                    THROW(new Error('Oops')),
                    () => { a+= 'E'; }
                ),
                done,
                () => {
                    expect(a).to.equal("ABD");
                },
                Error, "Oops"
            );
        });
    });

    describe('When step expression throws exception', function() {
        it('should bypass condition and body and surface the exception', function(done) {
            let a = "";
            runTestAndExpectError(
                FOR(
                    () => { a += 'A'; },
                    () => { a += 'B'; return true; },
                    () => { a += 'C'; throw new Error('Oops'); a += 'E'; }
                ).DO(
                    () => { a+= 'D'; },
                ),
                done,
                () => {
                    expect(a).to.equal("ABDC");
                },
                Error, "Oops"
            );
        });
    });
    
});
