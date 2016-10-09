var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest } from './common.js';

describe('SYNC statement', function() {
    it('should replace variable with their resovled value', function(done) {
        let ax;
        let ay;
        runTest(
            SEQ(
                LET("x", Promise.resolve(2)),
                LET("y", Promise.resolve(3)),
                SYNC("x", "y"),
                ({x, y}) => {
                    ax = x;
                    ay = y;
                } 
            ),
            done,
            () => {
                expect(ax).to.equal(2);
                expect(ay).to.equal(3);
            }
        );
    });
});