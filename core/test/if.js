var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest } from './common.js';

describe('IF statement', function() {
    it('should execute true branch when condition is true', function(done) {
        let a = "x";
        runTest(
            IF(() => { return true; }).
                THEN(() => { 
                    a = 'true'; 
                }).
                ELSE(() => {
                    a = 'false'; 
                }),
            done,                
            () => {
                expect(a).to.equal("true");
            }
        );
    });

    it('should execute false branch when condition is false', function(done) {
        let a = "x";
        runTest(
            IF(() => { return false; }).
                THEN(() => { 
                    a = 'true'; 
                }).
                ELSE(() => {
                    a = 'false'; 
                }),
            done,                
            () => {
                expect(a).to.equal("false");
            }
        );
    });

    it('should execute true branch when condition is promised to be true', function(done) {
        let a = "x";
        runTest(
            IF(() => { return Promise.resolve(true); }).
                THEN(() => { 
                    a = 'true'; 
                }).
                ELSE(() => {
                    a = 'false'; 
                }),
            done,
            () => {
                expect(a).to.equal("true");
            }
        );
    });

    it('should execute false branch when condition is promised to be false', function(done) {
        let a = "x";
        runTest(
            IF(() => { return Promise.resolve(false); }).
                THEN(() => { 
                    a = 'true'; 
                }).
                ELSE(() => {
                    a = 'false'; 
                }),
            done,
            () => {
                expect(a).to.equal("false");
            }
        );
    });
});
