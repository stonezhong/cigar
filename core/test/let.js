var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest } from './common.js';

describe('LET statement', function() {
    it('should be able to read variable in the same scope', function(done) {
        let a = "";
        runTest(
            SEQ(
                LET("foo", "A"),
                ({foo}) => {
                    a = foo;
                },
            ),
            done,
            () => {
                expect(a).to.equal("A");
            }
        );
    });

    it('should be able to update variable in the same scope', function(done) {
        let a = "";
        runTest(
            SEQ(
                LET("foo", "A"),
                (local) => {
                    local.foo += "B";
                },
                ({foo}) => {
                    a = foo;
                },
            ),
            done,
            () => {
                expect(a).to.equal("AB");
            }
        );
    });

    it('should be able to read variable in the parent scope', function(done) {
        let a = "";
        runTest(
            SEQ(
                LET("foo", "A"),
                SEQ(
                    ({foo}) => {
                        a = foo;
                    },
                ),
            ),
            done,
            () => {
                expect(a).to.equal("A");
            }
        );
    });

    it('should be able to update variable in the parent scope', function(done) {
        let a = "";
        runTest(
            SEQ(
                LET("foo", "A"),
                SEQ(
                    (local) => {
                        local.foo += "B";
                    },
                ),
                ({foo}) => {
                    a = foo;
                },
            ),
            done,
            () => {
                expect(a).to.equal("AB");
            }
        );
    });

    it('should be able to hide variable in the parent scope', function(done) {
        let a = "";
        runTest(
            SEQ(
                LET("foo", "A"),
                SEQ(
                    LET("foo", "B"),
                    ({foo}) => { a += foo; }
                ),
                ({foo}) => {
                    a += foo;
                }
            ),
            done,
            () => {
                expect(a).to.equal("BA");
            }
        );
    });

    describe('When used in init expression in FOR statement', function() {
        it('can be accessed in the body and condition expression', function(done) {
            let a;
            runTest(
                SEQ(
                    LET("sum", 0),
                    FOR(
                        LET("i", 1),
                        ({i}) => { return i <= 10; },
                        (local) => {
                            local.i ++;
                        }
                    ).DO(
                        (local) => {
                            local.sum += local.i;
                        }
                    ),
                    ({sum}) => {
                        a = sum;
                    }
                ),
                done,
                () => {
                    expect(a).to.equal(55);
                }
            );
        });
    });
});