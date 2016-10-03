var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest } from './common.js';

describe('SEQ statement', function() {
    it('should run all inner statements', function(done) {
        let a = "";
        runTest(
            SEQ(
                (local) => {
                    a += "a";
                },
                (local) => {
                    a += "b";
                },
            ),
            done,
            () => {
                expect(a).to.equal("ab");
            }
        );
    });

    it('should run inner statements sequentially', function(done) {
        let a = "";
        runTest(
            SEQ(
                (local) => {
                    a += "a";
                    return Promise.resolve().then(() => {
                        a += "c";
                    });
                },
                (local) => {
                    a += "b";
                },
            ),
            done,
            () => {
                expect(a).to.equal("acb");
            }
        );
    });
});