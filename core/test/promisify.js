var assert = require('assert');
var expect = require("chai").expect;

import * as C from '../index';
import { runTest, runTestAndExpectError } from './common.js';

function addA(x, y) {
    return (x + y);
}

function addA_SyncError(x, y) {
    throw Error("Oops");
}

function addA_AsyncError(x, y) {
    return Promise.reject(new Error("Oops"));
}

function addB(x, y, callback) {
    Promise.resolve(x + y).then((sum) => {
        callback(null, sum);
    });
    return ;
}

function addB_SyncError(x, y, callback) {
    throw new Error("Oops");
}

function addB_AsyncError(x, y, callback) {
    Promise.resolve(x + y).then((sum) => {
        callback(new Error("Oops"), null);
    });
    return ;
}

addA = C.promisify(addA);
addA_AsyncError = C.promisify(addA_AsyncError);
addA_SyncError = C.promisify(addA_SyncError);

addB = C.promisify(addB, true);
addB_AsyncError = C.promisify(addB_AsyncError, true);
addB_SyncError = C.promisify(addB_SyncError, true);


describe('promisify', function() {
    describe('without callback', function() {
        describe('when first arg is rejected', function() {
            it('should reject the call and surface the exception', function(done) {
                runTestAndExpectError(
                    SEQ(
                        () => addA(Promise.reject(new Error("Oops"), 3))
                    ),
                    done,                
                    () => {
                    },
                    Error, "Oops"
                );
            });
        });

        describe('when second arg is rejected', function() {
            it('should reject the call and surface the exception', function(done) {
                runTestAndExpectError(
                    SEQ(
                        () => addA(2, Promise.reject(new Error("Oops")))
                    ),
                    done,                
                    () => {
                    },
                    Error, "Oops"
                );
            });
        });

        describe('when both first arg and second arg are promises', function() {
            it('should return the right value', function(done) {
                let a = 0;
                let b = 0;
                runTest(
                    SEQ(
                        () => a = addA(Promise.resolve(2), Promise.resolve(3)),
                        () => {  
                            return Promise.resolve(a).then((resolvedA) => {
                                b = resolvedA;
                                return a;
                            }); 
                        }
                    ),
                    done,                
                    () => {
                        expect(b).to.equal(5);
                    },
                );
            });
        });

        describe('when first arg is a promise and second arg is a value', function() {
            it('should return the right value', function(done) {
                let a = 0;
                let b = 0;
                runTest(
                    SEQ(
                        () => a = addA(Promise.resolve(2), 3),
                        () => {  
                            return Promise.resolve(a).then((resolvedA) => {
                                b = resolvedA;
                                return a;
                            }); 
                        }
                    ),
                    done,                
                    () => {
                        expect(b).to.equal(5);
                    },
                );
            });
        });

        describe('when first arg is a value and second arg is a promise', function() {
            it('should return the right value', function(done) {
                let a = 0;
                let b = 0;
                runTest(
                    SEQ(
                        () => a = addA(2, Promise.resolve(3)),
                        () => {  
                            return Promise.resolve(a).then((resolvedA) => {
                                b = resolvedA;
                                return a;
                            }); 
                        }
                    ),
                    done,                
                    () => {
                        expect(b).to.equal(5);
                    },
                );
            });
        });

        describe('when both args are value', function() {
            it('should return the right value', function(done) {
                let a = 0;
                let b = 0;
                runTest(
                    SEQ(
                        () => a = addA(2, 3),
                        () => {  
                            return Promise.resolve(a).then((resolvedA) => {
                                b = resolvedA;
                                return a;
                            }); 
                        }
                    ),
                    done,                
                    () => {
                        expect(b).to.equal(5);
                    },
                );
            });
        });

        describe('when function throws synchronous error', function() {
            it('should surface error', function(done) {
                let a = 0;
                let b = 0;
                runTestAndExpectError(
                    SEQ(
                        () => a = addA_SyncError(2, 3),
                    ),
                    done,                
                    () => {
                    },
                    Error, "Oops"
                );
            });
        });

        describe('when function throws asynchronous error', function() {
            it('should surface error', function(done) {
                let a = 0;
                let b = 0;
                runTestAndExpectError(
                    SEQ(
                        () => a = addA_AsyncError(2, 3),
                    ),
                    done,                
                    () => {
                    },
                    Error, "Oops"
                );
            });
        });
    });

    describe('with callback', function() {
        describe('when first arg is rejected', function() {
            it('should reject the call and surface the exception', function(done) {
                runTestAndExpectError(
                    SEQ(
                        () => addB(Promise.reject(new Error("Oops"), 3))
                    ),
                    done,                
                    () => {
                    },
                    Error, "Oops"
                );
            });
        });

        describe('when second arg is rejected', function() {
            it('should reject the call and surface the exception', function(done) {
                runTestAndExpectError(
                    SEQ(
                        () => addB(2, Promise.reject(new Error("Oops")))
                    ),
                    done,                
                    () => {
                    },
                    Error, "Oops"
                );
            });
        });

        describe('when both first arg and second arg are promises', function() {
            it('should return the right value', function(done) {
                let a = 0;
                let b = 0;
                runTest(
                    SEQ(
                        () => a = addB(Promise.resolve(2), Promise.resolve(3)),
                        () => {  
                            return Promise.resolve(a).then((resolvedA) => {
                                b = resolvedA;
                                return a;
                            }); 
                        }
                    ),
                    done,                
                    () => {
                        expect(b).to.equal(5);
                    },
                );
            });
        });

        describe('when first arg is a promise and second arg is a value', function() {
            it('should return the right value', function(done) {
                let a = 0;
                let b = 0;
                runTest(
                    SEQ(
                        () => a = addB(Promise.resolve(2), 3),
                        () => {  
                            return Promise.resolve(a).then((resolvedA) => {
                                b = resolvedA;
                                return a;
                            }); 
                        }
                    ),
                    done,                
                    () => {
                        expect(b).to.equal(5);
                    },
                );
            });
        });

        describe('when first arg is a value and second arg is a promise', function() {
            it('should return the right value', function(done) {
                let a = 0;
                let b = 0;
                runTest(
                    SEQ(
                        () => a = addB(2, Promise.resolve(3)),
                        () => {  
                            return Promise.resolve(a).then((resolvedA) => {
                                b = resolvedA;
                                return a;
                            }); 
                        }
                    ),
                    done,                
                    () => {
                        expect(b).to.equal(5);
                    },
                );
            });
        });

        describe('when both args are value', function() {
            it('should return the right value', function(done) {
                let a = 0;
                let b = 0;
                runTest(
                    SEQ(
                        () => a = addB(2, 3),
                        () => {  
                            return Promise.resolve(a).then((resolvedA) => {
                                b = resolvedA;
                                return a;
                            }); 
                        }
                    ),
                    done,                
                    () => {
                        expect(b).to.equal(5);
                    },
                );
            });
        });
        
        describe('when function throws synchronous error', function() {
            it('should surface error', function(done) {
                let a = 0;
                let b = 0;
                runTestAndExpectError(
                    SEQ(
                        () => a = addB_SyncError(2, 3),
                    ),
                    done,                
                    () => {
                    },
                    Error, "Oops"
                );
            });
        });
        
        describe('when function throws asynchronous error', function() {
            it('should surface error', function(done) {
                let a = 0;
                let b = 0;
                runTestAndExpectError(
                    SEQ(
                        () => a = addB_AsyncError(2, 3),
                    ),
                    done,                
                    () => {
                    },
                    Error, "Oops"
                );
            });
        });
    });
});
