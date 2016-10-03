var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest } from './common.js';

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
    
});
