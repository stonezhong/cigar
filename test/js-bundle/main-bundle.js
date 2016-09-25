(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _cigar = require("cigar");

var _cigar2 = _interopRequireDefault(_cigar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IF(() => { return Promise.resolve(false); }).
//     THEN(
//         () => { console.log("ok, I will do it"); },
//         () => { console.log("ok, I will do it again"); },
//     ).ELSE(
//         () => { console.log("no, I refuse to do it"); },
//         () => { console.log("this is no good"); }
//     ).
// run().then(() => {
//     console.log("The end");
// });

// let i;
// let sum;
// FOR(
//     ()=> { i = 0; sum = 0; },
//     ()=> { return (i <= 10); },
//     ()=> { i ++; }
// ).DO(
//     IF( () => { return ((i % 2) == 0); }).THEN(CONTINUE),
//     () => { sum += i; },
//     () => { console.log("don't worry, I will take care of it"); }
// ).run().then(() => {
//     console.log(`sum = ${sum}`);
//     console.log("The end");
// });

// let i = 0;
// let sum = 0;
// WHILE( () => { return i < 10; }).
//     DO(
//         () => { i ++; sum += i; },
//         IF(() => { return (i == 5);}).THEN(BREAK)
//     ).
// run().then(() => {
//         console.log(`sum = ${sum}`);
//         console.log("Done");
//     }
// );

// let i = 0;
// let sum = 0;
// DO(
//     () => { i ++; sum += i;}
// ).WHILE(() => { return i < 10; }).
// run().then(() => {
//         console.log(`sum = ${sum}`);
//         console.log("Done");
// });

TRY(function () {
    console.log("step 1");
}, THROW("I am tired"), function () {
    console.log("step 2");
}).CATCH(function (e) {
    console.log("error " + e + " is absorbed");
}).FINALLY(function () {
    console.log("need to release the resource");
}).run().then(function () {
    console.log("Done");
}, function (e) {
    console.log("got exception: " + e);
});

},{"cigar":15}],2:[function(require,module,exports){
'use strict';

var _BreakError = require('./BreakError');

var _BreakError2 = _interopRequireDefault(_BreakError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theBreakError = new _BreakError2.default();

var BREAK = function BREAK() {
    return Promise.reject(theBreakError);
};

module.exports = BREAK;

},{"./BreakError":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _es6Error = require('es6-error');

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreakError = function (_ExtendableError) {
  _inherits(BreakError, _ExtendableError);

  function BreakError() {
    _classCallCheck(this, BreakError);

    return _possibleConstructorReturn(this, (BreakError.__proto__ || Object.getPrototypeOf(BreakError)).apply(this, arguments));
  }

  return BreakError;
}(_es6Error2.default);

exports.default = BreakError;

},{"es6-error":16}],4:[function(require,module,exports){
'use strict';

var _ContinueError = require('./ContinueError');

var _ContinueError2 = _interopRequireDefault(_ContinueError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theContinueError = new _ContinueError2.default();

var CONTINUE = function CONTINUE() {
    return Promise.reject(theContinueError);
};

module.exports = CONTINUE;

},{"./ContinueError":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _es6Error = require('es6-error');

var _es6Error2 = _interopRequireDefault(_es6Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContinueError = function (_ExtendableError) {
  _inherits(ContinueError, _ExtendableError);

  function ContinueError() {
    _classCallCheck(this, ContinueError);

    return _possibleConstructorReturn(this, (ContinueError.__proto__ || Object.getPrototypeOf(ContinueError)).apply(this, arguments));
  }

  return ContinueError;
}(_es6Error2.default);

exports.default = ContinueError;

},{"es6-error":16}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = require('./Util');

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

var _SequentialStatementGroup = require('./SequentialStatementGroup');

var _SequentialStatementGroup2 = _interopRequireDefault(_SequentialStatementGroup);

var _BreakError = require('./BreakError');

var _BreakError2 = _interopRequireDefault(_BreakError);

var _ContinueError = require('./ContinueError');

var _ContinueError2 = _interopRequireDefault(_ContinueError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Syntax
// DO(statement).WHILE(conditionExpr)

var DoWhileStatement = function (_Statement) {
    _inherits(DoWhileStatement, _Statement);

    // conditionExpr;
    // bodyStatement;

    function DoWhileStatement(statement) {
        _classCallCheck(this, DoWhileStatement);

        var _this = _possibleConstructorReturn(this, (DoWhileStatement.__proto__ || Object.getPrototypeOf(DoWhileStatement)).call(this));

        _this.bodyStatement = statement;
        _this.run = _this.run.bind(_this);
        return _this;
    }

    _createClass(DoWhileStatement, [{
        key: 'run',
        value: function run() {
            var _this2 = this;

            return Promise.resolve((0, _Util.executeStatement)(this.bodyStatement)).then(function () {
                return Promise.resolve((0, _Util.getValue)(_this2.conditionExpr)).then(function (resolvedConditionValue) {
                    if (!resolvedConditionValue) {
                        return Promise.resolve(undefined);
                    }
                    return _this2.run();
                });
            }, function (error) {
                if (error instanceof _BreakError2.default) {
                    return Promise.resolve(undefined);
                }
                if (error instanceof _ContinueError2.default) {
                    return _this2.run();
                }
                return error; // unhandled error
            });
        }
    }]);

    return DoWhileStatement;
}(_Statement3.default);

var DoWhileBodyNode = function () {
    function DoWhileBodyNode(statement) {
        _classCallCheck(this, DoWhileBodyNode);

        this.doWhileStatement = new DoWhileStatement(statement);
    }

    _createClass(DoWhileBodyNode, [{
        key: 'WHILE',
        value: function WHILE(conditionExpr) {
            this.doWhileStatement.conditionExpr = conditionExpr;
            return this.doWhileStatement;
        }
    }]);

    return DoWhileBodyNode;
}();

var DO = function DO() {
    for (var _len = arguments.length, statements = Array(_len), _key = 0; _key < _len; _key++) {
        statements[_key] = arguments[_key];
    }

    return new DoWhileBodyNode(new _SequentialStatementGroup2.default(statements));
};

module.exports = DO;

},{"./BreakError":3,"./ContinueError":5,"./SequentialStatementGroup":9,"./Statement":10,"./Util":13}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = require('./Util');

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

var _SequentialStatementGroup = require('./SequentialStatementGroup');

var _SequentialStatementGroup2 = _interopRequireDefault(_SequentialStatementGroup);

var _BreakError = require('./BreakError');

var _BreakError2 = _interopRequireDefault(_BreakError);

var _ContinueError = require('./ContinueError');

var _ContinueError2 = _interopRequireDefault(_ContinueError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Syntax
// FOR(initExpr, conditionExpr, stepExpr).DO(bodyStatement);


var ForStatement = function (_Statement) {
    _inherits(ForStatement, _Statement);

    // initExpr;
    // conditionExpr;
    // stepExpr;
    // bodyStatement;

    function ForStatement(initExpr, conditionExpr, stepExpr) {
        _classCallCheck(this, ForStatement);

        var _this = _possibleConstructorReturn(this, (ForStatement.__proto__ || Object.getPrototypeOf(ForStatement)).call(this));

        _this.initExpr = initExpr;
        _this.conditionExpr = conditionExpr;
        _this.stepExpr = stepExpr;

        _this.runLoop = _this.runLoop.bind(_this);
        return _this;
    }

    _createClass(ForStatement, [{
        key: 'runLoopWithResolvedConditionValue',
        value: function runLoopWithResolvedConditionValue(resolvedConditionValue) {
            var _this2 = this;

            if (!resolvedConditionValue) {
                return Promise.resolve(undefined);
            }

            return Promise.resolve((0, _Util.executeStatement)(this.bodyStatement)).then(function () {
                return Promise.resolve((0, _Util.getValue)(_this2.stepExpr)).then(_this2.runLoop);
            }, function (error) {
                if (error instanceof _BreakError2.default) {
                    return Promise.resolve(undefined);
                }
                if (error instanceof _ContinueError2.default) {
                    return Promise.resolve((0, _Util.getValue)(_this2.stepExpr)).then(_this2.runLoop);
                }
                return error; // unhandled error
            });
        }
    }, {
        key: 'runLoop',
        value: function runLoop() {
            var _this3 = this;

            return Promise.resolve((0, _Util.getValue)(this.conditionExpr)).then(function (resolvedConditionValue) {
                return _this3.runLoopWithResolvedConditionValue(resolvedConditionValue);
            });
        }
    }, {
        key: 'run',
        value: function run() {
            return Promise.resolve((0, _Util.getValue)(this.initExpr)).then(this.runLoop);
        }
    }]);

    return ForStatement;
}(_Statement3.default);

var ForConditionNode = function () {
    function ForConditionNode(initExpr, conditionExpr, stepExpr) {
        _classCallCheck(this, ForConditionNode);

        this.forStatement = new ForStatement(initExpr, conditionExpr, stepExpr);
    }

    _createClass(ForConditionNode, [{
        key: 'DO',
        value: function DO() {
            for (var _len = arguments.length, statements = Array(_len), _key = 0; _key < _len; _key++) {
                statements[_key] = arguments[_key];
            }

            this.forStatement.bodyStatement = new _SequentialStatementGroup2.default(statements);
            return this.forStatement;
        }
    }]);

    return ForConditionNode;
}();

var FOR = function FOR(initExpr, conditionExpr, stepExpr) {
    return new ForConditionNode(initExpr, conditionExpr, stepExpr);
};

module.exports = FOR;

},{"./BreakError":3,"./ContinueError":5,"./SequentialStatementGroup":9,"./Statement":10,"./Util":13}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = require('./Util');

var _Statement3 = require('./Statement');

var _Statement4 = _interopRequireDefault(_Statement3);

var _SequentialStatementGroup = require('./SequentialStatementGroup');

var _SequentialStatementGroup2 = _interopRequireDefault(_SequentialStatementGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // syntax: 
// IF (expr).THEN(statement);
// IF (expr).THEN(statement).ELSE(statement);

var IfStatement = function (_Statement) {
    _inherits(IfStatement, _Statement);

    // conditionExpr;
    // trueBranchStatement;
    // falseBranchStatement;
    function IfStatement(conditionExpr) {
        _classCallCheck(this, IfStatement);

        var _this = _possibleConstructorReturn(this, (IfStatement.__proto__ || Object.getPrototypeOf(IfStatement)).call(this));

        _this.conditionExpr = conditionExpr;
        return _this;
    }

    _createClass(IfStatement, [{
        key: 'runWithResolvedCondition',
        value: function runWithResolvedCondition(resolvedConditionValue) {
            if (resolvedConditionValue) {
                return (0, _Util.executeStatement)(this.trueBranchStatement);
            } else {
                return (0, _Util.executeStatement)(this.falseBranchStatement);
            }
        }
    }, {
        key: 'run',
        value: function run() {
            var _this2 = this;

            return Promise.resolve((0, _Util.getValue)(this.conditionExpr)).then(function (resolvedConditionValue) {
                return _this2.runWithResolvedCondition(resolvedConditionValue);
            });
        }
    }]);

    return IfStatement;
}(_Statement4.default);

var IfConditionNode = function () {
    function IfConditionNode(condition) {
        _classCallCheck(this, IfConditionNode);

        this.ifStatement = new IfStatement(condition);
    }

    // ifStatement


    _createClass(IfConditionNode, [{
        key: 'THEN',
        value: function THEN() {
            for (var _len = arguments.length, statements = Array(_len), _key = 0; _key < _len; _key++) {
                statements[_key] = arguments[_key];
            }

            this.ifStatement.trueBranchStatement = new _SequentialStatementGroup2.default(statements);
            return new IfConditionThenStatement(this.ifStatement);
        }
    }, {
        key: 'ELSE',
        value: function ELSE() {
            for (var _len2 = arguments.length, statements = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                statements[_key2] = arguments[_key2];
            }

            this.ifStatement.falseBranchStatement = new _SequentialStatementGroup2.default(statements);
            return this.ifStatement;
        }
    }]);

    return IfConditionNode;
}();

var IfConditionThenStatement = function (_Statement2) {
    _inherits(IfConditionThenStatement, _Statement2);

    function IfConditionThenStatement(ifStatement) {
        _classCallCheck(this, IfConditionThenStatement);

        var _this3 = _possibleConstructorReturn(this, (IfConditionThenStatement.__proto__ || Object.getPrototypeOf(IfConditionThenStatement)).call(this));

        _this3.ifStatement = ifStatement;
        return _this3;
    }

    _createClass(IfConditionThenStatement, [{
        key: 'ELSE',
        value: function ELSE() {
            for (var _len3 = arguments.length, statements = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                statements[_key3] = arguments[_key3];
            }

            this.ifStatement.falseBranchStatement = new _SequentialStatementGroup2.default(statements);
            return this.ifStatement;
        }
    }, {
        key: 'run',
        value: function run() {
            return this.ifStatement.run();
        }
    }]);

    return IfConditionThenStatement;
}(_Statement4.default);

var IF = function IF(expr) {
    return new IfConditionNode(expr);
};

module.exports = IF;

},{"./SequentialStatementGroup":9,"./Statement":10,"./Util":13}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = require('./Util');

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SequentialStatementGroup = function (_Statement) {
    _inherits(SequentialStatementGroup, _Statement);

    function SequentialStatementGroup(statements) {
        _classCallCheck(this, SequentialStatementGroup);

        var _this = _possibleConstructorReturn(this, (SequentialStatementGroup.__proto__ || Object.getPrototypeOf(SequentialStatementGroup)).call(this));

        _this.statements = statements;
        return _this;
    }

    _createClass(SequentialStatementGroup, [{
        key: 'run',
        value: function run() {
            return this.runWithIndex(0);
        }
    }, {
        key: 'runWithIndex',
        value: function runWithIndex(index) {
            var _this2 = this;

            if (index >= this.statements.length) {
                return Promise.resolve(undefined);
            }

            return Promise.resolve((0, _Util.executeStatement)(this.statements[index])).then(function () {
                return _this2.runWithIndex(index + 1);
            });
        }
    }]);

    return SequentialStatementGroup;
}(_Statement3.default);

exports.default = SequentialStatementGroup;

},{"./Statement":10,"./Util":13}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Statement = function Statement() {
    _classCallCheck(this, Statement);
};

exports.default = Statement;

},{}],11:[function(require,module,exports){
"use strict";

// Syntax
// THROW(error)

var THROW = function THROW(error) {
    return function () {
        return Promise.reject(error);
    };
};

module.exports = THROW;

},{}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = require('./Util');

var _Statement3 = require('./Statement');

var _Statement4 = _interopRequireDefault(_Statement3);

var _SequentialStatementGroup = require('./SequentialStatementGroup');

var _SequentialStatementGroup2 = _interopRequireDefault(_SequentialStatementGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Syntax: TRY(statement).CATCH(handler).FINALLY(handler)

var TryCatchFinallyStatement = function (_Statement) {
    _inherits(TryCatchFinallyStatement, _Statement);

    // tryBlock
    // catchBlock
    // finallyBlock
    function TryCatchFinallyStatement(tryBlock) {
        _classCallCheck(this, TryCatchFinallyStatement);

        var _this = _possibleConstructorReturn(this, (TryCatchFinallyStatement.__proto__ || Object.getPrototypeOf(TryCatchFinallyStatement)).call(this));

        _this.tryBlock = tryBlock;
        return _this;
    }

    _createClass(TryCatchFinallyStatement, [{
        key: 'invokeCatchBlock',
        value: function invokeCatchBlock(e) {
            if (this.catchBlock) {
                try {
                    // user may throw an error by returning a rejected promise
                    return Promise.resolve(this.catchBlock(e));
                } catch (e) {
                    // catch block synchronous error
                    return Promise.reject(e);
                }
            }

            // if there is no catch block, surface the error
            return Promise.reject(e);
        }
    }, {
        key: 'handleError',
        value: function handleError(e) {
            var _this2 = this;

            var catchPromise = void 0;

            // if there is no catch block
            return this.invokeCatchBlock(e).then(function () {
                // catch block  absorbed the exception 
                return Promise.resolve((0, _Util.executeStatement)(_this2.finallyBlock));
            }, function (ee) {
                // catch blow did not absorb the exception
                return Promise.resolve((0, _Util.executeStatement)(_this2.finallyBlock)).then(function () {
                    // finally block did not blow up
                    return Promise.reject(ee);
                });
            });
        }
    }, {
        key: 'run',
        value: function run() {
            var _this3 = this;

            var tryPromise = void 0;

            try {
                tryPromise = (0, _Util.executeStatement)(this.tryBlock);
            } catch (e) {
                // we have synchronous error
                return this.handleErrror(e);
            }

            return Promise.resolve(tryPromise).then(function () {
                // no error, invoke the finally block
                return Promise.resolve((0, _Util.executeStatement)(_this3.finallyBlock));
            }, function (ee) {
                // we have async error
                return _this3.handleError(ee);
            });
        }
    }]);

    return TryCatchFinallyStatement;
}(_Statement4.default);

var TryNode = function () {
    function TryNode(tryBlock) {
        _classCallCheck(this, TryNode);

        this.tryCatchFinallyStatement = new TryCatchFinallyStatement(tryBlock);
    }

    _createClass(TryNode, [{
        key: 'CATCH',
        value: function CATCH(catchBlock) {
            this.tryCatchFinallyStatement.catchBlock = catchBlock;
            return new TryCatchNode(this.tryCatchFinallyStatement);
        }
    }, {
        key: 'FINALLY',
        value: function FINALLY(finallyBlock) {
            this.tryCatchFinallyStatement.finallyBlock = new TryCatchFinallyStatement(finallyBlock);
            return this.tryCatchFinallyStatement;
        }
    }]);

    return TryNode;
}();

var TryCatchNode = function (_Statement2) {
    _inherits(TryCatchNode, _Statement2);

    function TryCatchNode(tryCatchFinallyStatement) {
        _classCallCheck(this, TryCatchNode);

        var _this4 = _possibleConstructorReturn(this, (TryCatchNode.__proto__ || Object.getPrototypeOf(TryCatchNode)).call(this));

        _this4.tryCatchFinallyStatement = tryCatchFinallyStatement;
        return _this4;
    }

    _createClass(TryCatchNode, [{
        key: 'FINALLY',
        value: function FINALLY(finallyBlock) {
            this.tryCatchFinallyStatement.finallyBlock = finallyBlock;
            return this.tryCatchFinallyStatement;
        }
    }, {
        key: 'run',
        value: function run() {
            return this.tryCatchFinallyStatement.run();
        }
    }]);

    return TryCatchNode;
}(_Statement4.default);

var TRY = function TRY() {
    for (var _len = arguments.length, statements = Array(_len), _key = 0; _key < _len; _key++) {
        statements[_key] = arguments[_key];
    }

    return new TryNode(new _SequentialStatementGroup2.default(statements));
};

module.exports = TRY;

},{"./SequentialStatementGroup":9,"./Statement":10,"./Util":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.isPromise = isPromise;
exports.getValue = getValue;
exports.executeStatement = executeStatement;

var _Statement = require('./Statement');

var _Statement2 = _interopRequireDefault(_Statement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPromise(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.then === 'function' && typeof value.catch === 'function';
}

function getValue(value) {
    if (value instanceof _Statement2.default) {
        return value.run();
    }
    if (value && value.constructor && value.call && value.apply && value.length == 0) {
        return value();
    }

    return value;
}

function executeStatement(statement) {
    if (statement instanceof _Statement2.default) {
        return statement.run();
    }

    if (statement && statement.constructor && statement.call && statement.apply && statement.length == 0) {
        return statement();
    }

    return Promise.resolve(undefined);
}

},{"./Statement":10}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = require('./Util');

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

var _SequentialStatementGroup = require('./SequentialStatementGroup');

var _SequentialStatementGroup2 = _interopRequireDefault(_SequentialStatementGroup);

var _BreakError = require('./BreakError');

var _BreakError2 = _interopRequireDefault(_BreakError);

var _ContinueError = require('./ContinueError');

var _ContinueError2 = _interopRequireDefault(_ContinueError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Syntax
// WHILE (conditionExpr).DO(statement)

var WhileStatement = function (_Statement) {
    _inherits(WhileStatement, _Statement);

    // conditionExpr;
    // bodyStatement;

    function WhileStatement(conditionExpr) {
        _classCallCheck(this, WhileStatement);

        var _this = _possibleConstructorReturn(this, (WhileStatement.__proto__ || Object.getPrototypeOf(WhileStatement)).call(this));

        _this.conditionExpr = conditionExpr;
        _this.run = _this.run.bind(_this);
        return _this;
    }

    _createClass(WhileStatement, [{
        key: 'run',
        value: function run() {
            var _this2 = this;

            return Promise.resolve((0, _Util.getValue)(this.conditionExpr)).then(function (resolvedConditionValue) {
                if (!resolvedConditionValue) {
                    return Promise.resolve(undefined);
                }
                return Promise.resolve((0, _Util.executeStatement)(_this2.bodyStatement)).then(_this2.run, function (error) {
                    if (error instanceof _BreakError2.default) {
                        return Promise.resolve(undefined);
                    }
                    if (error instanceof _ContinueError2.default) {
                        return _this2.run();
                    }
                    return error; // unhandled error
                });
            });
        }
    }]);

    return WhileStatement;
}(_Statement3.default);

var WhlieConditionNode = function () {
    function WhlieConditionNode(conditionExpr) {
        _classCallCheck(this, WhlieConditionNode);

        this.whileStatement = new WhileStatement(conditionExpr);
    }

    _createClass(WhlieConditionNode, [{
        key: 'DO',
        value: function DO() {
            for (var _len = arguments.length, statements = Array(_len), _key = 0; _key < _len; _key++) {
                statements[_key] = arguments[_key];
            }

            this.whileStatement.bodyStatement = new _SequentialStatementGroup2.default(statements);
            return this.whileStatement;
        }
    }]);

    return WhlieConditionNode;
}();

var WHILE = function WHILE(conditionExpr) {
    return new WhlieConditionNode(conditionExpr);
};

module.exports = WHILE;

},{"./BreakError":3,"./ContinueError":5,"./SequentialStatementGroup":9,"./Statement":10,"./Util":13}],15:[function(require,module,exports){
(function (global){
'use strict';

var _If = require('./If');

var _If2 = _interopRequireDefault(_If);

var _For = require('./For');

var _For2 = _interopRequireDefault(_For);

var _While = require('./While');

var _While2 = _interopRequireDefault(_While);

var _Do = require('./Do');

var _Do2 = _interopRequireDefault(_Do);

var _Break = require('./Break');

var _Break2 = _interopRequireDefault(_Break);

var _Continue = require('./Continue');

var _Continue2 = _interopRequireDefault(_Continue);

var _Try = require('./Try');

var _Try2 = _interopRequireDefault(_Try);

var _Throw = require('./Throw');

var _Throw2 = _interopRequireDefault(_Throw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global['IF'] = _If2.default;
global['FOR'] = _For2.default;
global['WHILE'] = _While2.default;
global['DO'] = _Do2.default;
global['BREAK'] = _Break2.default;
global['CONTINUE'] = _Continue2.default;
global['TRY'] = _Try2.default;
global['THROW'] = _Throw2.default;

module.export = {};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Break":2,"./Continue":4,"./Do":6,"./For":7,"./If":8,"./Throw":11,"./Try":12,"./While":14}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    cls.apply(this, arguments);
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var ExtendableError = function (_extendableBuiltin2) {
  _inherits(ExtendableError, _extendableBuiltin2);

  function ExtendableError() {
    var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, ExtendableError);

    // extending Error is weird and does not propagate `message`

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExtendableError).call(this, message));

    Object.defineProperty(_this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true
    });

    Object.defineProperty(_this, 'name', {
      configurable: true,
      enumerable: false,
      value: _this.constructor.name,
      writable: true
    });

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(_this, _this.constructor);
      return _possibleConstructorReturn(_this);
    }

    Object.defineProperty(_this, 'stack', {
      configurable: true,
      enumerable: false,
      value: new Error(message).stack,
      writable: true
    });
    return _this;
  }

  return ExtendableError;
}(_extendableBuiltin(Error));

exports.default = ExtendableError;
module.exports = exports['default'];
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLmpzIiwibm9kZV9tb2R1bGVzL2NpZ2FyL0JyZWFrLmpzIiwibm9kZV9tb2R1bGVzL2NpZ2FyL0JyZWFrRXJyb3IuanMiLCJub2RlX21vZHVsZXMvY2lnYXIvQ29udGludWUuanMiLCJub2RlX21vZHVsZXMvY2lnYXIvQ29udGludWVFcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9jaWdhci9Eby5qcyIsIm5vZGVfbW9kdWxlcy9jaWdhci9Gb3IuanMiLCJub2RlX21vZHVsZXMvY2lnYXIvSWYuanMiLCJub2RlX21vZHVsZXMvY2lnYXIvU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwLmpzIiwibm9kZV9tb2R1bGVzL2NpZ2FyL1N0YXRlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9jaWdhci9UaHJvdy5qcyIsIm5vZGVfbW9kdWxlcy9jaWdhci9UcnkuanMiLCJub2RlX21vZHVsZXMvY2lnYXIvVXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9jaWdhci9XaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9jaWdhci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lczYtZXJyb3IvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFDSSxZQUFNO0FBQUUsWUFBUSxHQUFSLENBQVksUUFBWjtBQUF3QixDQURwQyxFQUVJLE1BQU0s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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBjaWdhciBmcm9tICdjaWdhcic7XG5cbi8vIElGKCgpID0+IHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7IH0pLlxuLy8gICAgIFRIRU4oXG4vLyAgICAgICAgICgpID0+IHsgY29uc29sZS5sb2coXCJvaywgSSB3aWxsIGRvIGl0XCIpOyB9LFxuLy8gICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKFwib2ssIEkgd2lsbCBkbyBpdCBhZ2FpblwiKTsgfSxcbi8vICAgICApLkVMU0UoXG4vLyAgICAgICAgICgpID0+IHsgY29uc29sZS5sb2coXCJubywgSSByZWZ1c2UgdG8gZG8gaXRcIik7IH0sXG4vLyAgICAgICAgICgpID0+IHsgY29uc29sZS5sb2coXCJ0aGlzIGlzIG5vIGdvb2RcIik7IH1cbi8vICAgICApLlxuLy8gcnVuKCkudGhlbigoKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coXCJUaGUgZW5kXCIpO1xuLy8gfSk7XG5cbi8vIGxldCBpO1xuLy8gbGV0IHN1bTtcbi8vIEZPUihcbi8vICAgICAoKT0+IHsgaSA9IDA7IHN1bSA9IDA7IH0sXG4vLyAgICAgKCk9PiB7IHJldHVybiAoaSA8PSAxMCk7IH0sXG4vLyAgICAgKCk9PiB7IGkgKys7IH1cbi8vICkuRE8oXG4vLyAgICAgSUYoICgpID0+IHsgcmV0dXJuICgoaSAlIDIpID09IDApOyB9KS5USEVOKENPTlRJTlVFKSxcbi8vICAgICAoKSA9PiB7IHN1bSArPSBpOyB9LFxuLy8gICAgICgpID0+IHsgY29uc29sZS5sb2coXCJkb24ndCB3b3JyeSwgSSB3aWxsIHRha2UgY2FyZSBvZiBpdFwiKTsgfVxuLy8gKS5ydW4oKS50aGVuKCgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhgc3VtID0gJHtzdW19YCk7XG4vLyAgICAgY29uc29sZS5sb2coXCJUaGUgZW5kXCIpO1xuLy8gfSk7XG5cbi8vIGxldCBpID0gMDtcbi8vIGxldCBzdW0gPSAwO1xuLy8gV0hJTEUoICgpID0+IHsgcmV0dXJuIGkgPCAxMDsgfSkuXG4vLyAgICAgRE8oXG4vLyAgICAgICAgICgpID0+IHsgaSArKzsgc3VtICs9IGk7IH0sXG4vLyAgICAgICAgIElGKCgpID0+IHsgcmV0dXJuIChpID09IDUpO30pLlRIRU4oQlJFQUspXG4vLyAgICAgKS5cbi8vIHJ1bigpLnRoZW4oKCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhgc3VtID0gJHtzdW19YCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZVwiKTtcbi8vICAgICB9XG4vLyApO1xuXG4vLyBsZXQgaSA9IDA7XG4vLyBsZXQgc3VtID0gMDtcbi8vIERPKFxuLy8gICAgICgpID0+IHsgaSArKzsgc3VtICs9IGk7fVxuLy8gKS5XSElMRSgoKSA9PiB7IHJldHVybiBpIDwgMTA7IH0pLlxuLy8gcnVuKCkudGhlbigoKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGBzdW0gPSAke3N1bX1gKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJEb25lXCIpO1xuLy8gfSk7XG5cblRSWShcbiAgICAoKSA9PiB7IGNvbnNvbGUubG9nKFwic3RlcCAxXCIpOyB9LFxuICAgIFRIUk9XKFwiSSBhbSB0aXJlZFwiKSxcbiAgICAoKSA9PiB7IGNvbnNvbGUubG9nKFwic3RlcCAyXCIpOyB9LFxuKS5DQVRDSCggKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgZXJyb3IgJHtlfSBpcyBhYnNvcmJlZGApO1xufSkuRklOQUxMWShcbiAgICAoKSA9PiB7IGNvbnNvbGUubG9nKFwibmVlZCB0byByZWxlYXNlIHRoZSByZXNvdXJjZVwiKX1cbikucnVuKCkudGhlbihcbiAgICAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZVwiKTtcbiAgICB9LFxuICAgIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBnb3QgZXhjZXB0aW9uOiAke2V9YCk7XG4gICAgfVxuKTsiLCJpbXBvcnQgQnJlYWtFcnJvciBmcm9tICcuL0JyZWFrRXJyb3InO1xuXG5sZXQgdGhlQnJlYWtFcnJvciA9IG5ldyBCcmVha0Vycm9yKCk7XG5cbmxldCBCUkVBSyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0aGVCcmVha0Vycm9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCUkVBSztcbiIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSAnZXM2LWVycm9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWtFcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG59XG4iLCJpbXBvcnQgQ29udGludWVFcnJvciBmcm9tICcuL0NvbnRpbnVlRXJyb3InO1xuXG5sZXQgdGhlQ29udGludWVFcnJvciA9IG5ldyBDb250aW51ZUVycm9yKCk7XG5cbmxldCBDT05USU5VRSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0aGVDb250aW51ZUVycm9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDT05USU5VRTtcbiIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSAnZXM2LWVycm9yJztcbiBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRpbnVlRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xufVxuIiwiLy8gU3ludGF4XG4vLyBETyhzdGF0ZW1lbnQpLldISUxFKGNvbmRpdGlvbkV4cHIpXG5cbmltcG9ydCB7aXNQcm9taXNlLCBnZXRWYWx1ZSwgZXhlY3V0ZVN0YXRlbWVudH0gZnJvbSAnLi9VdGlsJztcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuaW1wb3J0IFNlcXVlbnRpYWxTdGF0ZW1lbnRHcm91cCBmcm9tICcuL1NlcXVlbnRpYWxTdGF0ZW1lbnRHcm91cCc7XG5pbXBvcnQgQnJlYWtFcnJvciBmcm9tICcuL0JyZWFrRXJyb3InO1xuaW1wb3J0IENvbnRpbnVlRXJyb3IgZnJvbSAnLi9Db250aW51ZUVycm9yJztcblxuY2xhc3MgRG9XaGlsZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gICAgLy8gY29uZGl0aW9uRXhwcjtcbiAgICAvLyBib2R5U3RhdGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYm9keVN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5ydW4gPSB0aGlzLnJ1bi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShleGVjdXRlU3RhdGVtZW50KHRoaXMuYm9keVN0YXRlbWVudCkpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZXRWYWx1ZSh0aGlzLmNvbmRpdGlvbkV4cHIpKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAocmVzb2x2ZWRDb25kaXRpb25WYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNvbHZlZENvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEJyZWFrRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBDb250aW51ZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7IC8vIHVuaGFuZGxlZCBlcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgRG9XaGlsZUJvZHlOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnQpIHtcbiAgICAgICAgdGhpcy5kb1doaWxlU3RhdGVtZW50ID0gbmV3IERvV2hpbGVTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgICB9XG4gICAgXG4gICAgV0hJTEUoY29uZGl0aW9uRXhwcikge1xuICAgICAgICB0aGlzLmRvV2hpbGVTdGF0ZW1lbnQuY29uZGl0aW9uRXhwciA9IGNvbmRpdGlvbkV4cHI7XG4gICAgICAgIHJldHVybiB0aGlzLmRvV2hpbGVTdGF0ZW1lbnQ7XG4gICAgfVxufVxuXG5sZXQgRE8gPSBmdW5jdGlvbiguLi4gc3RhdGVtZW50cykge1xuICAgIHJldHVybiBuZXcgRG9XaGlsZUJvZHlOb2RlKG5ldyBTZXF1ZW50aWFsU3RhdGVtZW50R3JvdXAoc3RhdGVtZW50cykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERPO1xuXG4iLCIvLyBTeW50YXhcbi8vIEZPUihpbml0RXhwciwgY29uZGl0aW9uRXhwciwgc3RlcEV4cHIpLkRPKGJvZHlTdGF0ZW1lbnQpO1xuaW1wb3J0IHtpc1Byb21pc2UsIGdldFZhbHVlLCBleGVjdXRlU3RhdGVtZW50fSBmcm9tICcuL1V0aWwnO1xuaW1wb3J0IFN0YXRlbWVudCBmcm9tICcuL1N0YXRlbWVudCc7XG5pbXBvcnQgU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwIGZyb20gJy4vU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwJztcbmltcG9ydCBCcmVha0Vycm9yIGZyb20gJy4vQnJlYWtFcnJvcic7XG5pbXBvcnQgQ29udGludWVFcnJvciBmcm9tICcuL0NvbnRpbnVlRXJyb3InO1xuXG5jbGFzcyBGb3JTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICAgIC8vIGluaXRFeHByO1xuICAgIC8vIGNvbmRpdGlvbkV4cHI7XG4gICAgLy8gc3RlcEV4cHI7XG4gICAgLy8gYm9keVN0YXRlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKGluaXRFeHByLCBjb25kaXRpb25FeHByLCBzdGVwRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXRFeHByID0gaW5pdEV4cHI7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uRXhwciA9IGNvbmRpdGlvbkV4cHI7XG4gICAgICAgIHRoaXMuc3RlcEV4cHIgPSBzdGVwRXhwcjtcblxuICAgICAgICB0aGlzLnJ1bkxvb3AgPSB0aGlzLnJ1bkxvb3AuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBydW5Mb29wV2l0aFJlc29sdmVkQ29uZGl0aW9uVmFsdWUocmVzb2x2ZWRDb25kaXRpb25WYWx1ZSkge1xuICAgICAgICBpZiAoIXJlc29sdmVkQ29uZGl0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZVN0YXRlbWVudCh0aGlzLmJvZHlTdGF0ZW1lbnQpKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0VmFsdWUodGhpcy5zdGVwRXhwcikpLnRoZW4odGhpcy5ydW5Mb29wKTtcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQnJlYWtFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIENvbnRpbnVlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZXRWYWx1ZSh0aGlzLnN0ZXBFeHByKSkudGhlbih0aGlzLnJ1bkxvb3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7IC8vIHVuaGFuZGxlZCBlcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJ1bkxvb3AoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0VmFsdWUodGhpcy5jb25kaXRpb25FeHByKSkudGhlbigocmVzb2x2ZWRDb25kaXRpb25WYWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuTG9vcFdpdGhSZXNvbHZlZENvbmRpdGlvblZhbHVlKHJlc29sdmVkQ29uZGl0aW9uVmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0VmFsdWUodGhpcy5pbml0RXhwcikpLnRoZW4odGhpcy5ydW5Mb29wKTtcbiAgICB9XG59XG5cbmNsYXNzIEZvckNvbmRpdGlvbk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGluaXRFeHByLCBjb25kaXRpb25FeHByLCBzdGVwRXhwcikge1xuICAgICAgICB0aGlzLmZvclN0YXRlbWVudCA9IG5ldyBGb3JTdGF0ZW1lbnQoaW5pdEV4cHIsIGNvbmRpdGlvbkV4cHIsIHN0ZXBFeHByKTtcbiAgICB9XG5cbiAgICBETyguLi4gc3RhdGVtZW50cykge1xuICAgICAgICB0aGlzLmZvclN0YXRlbWVudC5ib2R5U3RhdGVtZW50ID0gbmV3IFNlcXVlbnRpYWxTdGF0ZW1lbnRHcm91cChzdGF0ZW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yU3RhdGVtZW50O1xuICAgIH1cbn1cblxubGV0IEZPUiA9IGZ1bmN0aW9uKGluaXRFeHByLCBjb25kaXRpb25FeHByLCBzdGVwRXhwcikge1xuICAgIHJldHVybiBuZXcgRm9yQ29uZGl0aW9uTm9kZShpbml0RXhwciwgY29uZGl0aW9uRXhwciwgc3RlcEV4cHIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZPUjtcbiIsIi8vIHN5bnRheDogXG4vLyBJRiAoZXhwcikuVEhFTihzdGF0ZW1lbnQpO1xuLy8gSUYgKGV4cHIpLlRIRU4oc3RhdGVtZW50KS5FTFNFKHN0YXRlbWVudCk7XG5cbmltcG9ydCB7aXNQcm9taXNlLCBnZXRWYWx1ZSwgZXhlY3V0ZVN0YXRlbWVudH0gZnJvbSAnLi9VdGlsJztcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuaW1wb3J0IFNlcXVlbnRpYWxTdGF0ZW1lbnRHcm91cCBmcm9tICcuL1NlcXVlbnRpYWxTdGF0ZW1lbnRHcm91cCc7XG5cbmNsYXNzIElmU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgICAvLyBjb25kaXRpb25FeHByO1xuICAgIC8vIHRydWVCcmFuY2hTdGF0ZW1lbnQ7XG4gICAgLy8gZmFsc2VCcmFuY2hTdGF0ZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbkV4cHIgPSBjb25kaXRpb25FeHByO1xuICAgIH1cblxuICAgIHJ1bldpdGhSZXNvbHZlZENvbmRpdGlvbihyZXNvbHZlZENvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgIGlmIChyZXNvbHZlZENvbmRpdGlvblZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVN0YXRlbWVudCh0aGlzLnRydWVCcmFuY2hTdGF0ZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVTdGF0ZW1lbnQodGhpcy5mYWxzZUJyYW5jaFN0YXRlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZ2V0VmFsdWUodGhpcy5jb25kaXRpb25FeHByKSkudGhlbihcbiAgICAgICAgICAgIChyZXNvbHZlZENvbmRpdGlvblZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuV2l0aFJlc29sdmVkQ29uZGl0aW9uKHJlc29sdmVkQ29uZGl0aW9uVmFsdWUpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuY2xhc3MgSWZDb25kaXRpb25Ob2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5pZlN0YXRlbWVudCA9IG5ldyBJZlN0YXRlbWVudChjb25kaXRpb24pO1xuICAgIH1cblxuICAgIC8vIGlmU3RhdGVtZW50XG4gICAgVEhFTiguLi4gc3RhdGVtZW50cykge1xuICAgICAgICB0aGlzLmlmU3RhdGVtZW50LnRydWVCcmFuY2hTdGF0ZW1lbnQgPSBuZXcgU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwKHN0YXRlbWVudHMpO1xuICAgICAgICByZXR1cm4gbmV3IElmQ29uZGl0aW9uVGhlblN0YXRlbWVudCh0aGlzLmlmU3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICBFTFNFKC4uLiBzdGF0ZW1lbnRzKSB7XG4gICAgICAgIHRoaXMuaWZTdGF0ZW1lbnQuZmFsc2VCcmFuY2hTdGF0ZW1lbnQgPSBuZXcgU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwKHN0YXRlbWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5pZlN0YXRlbWVudDtcbiAgICB9XG59XG5cbmNsYXNzIElmQ29uZGl0aW9uVGhlblN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gICAgY29uc3RydWN0b3IoaWZTdGF0ZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZlN0YXRlbWVudCA9IGlmU3RhdGVtZW50O1xuICAgIH1cblxuICAgIEVMU0UoLi4uIHN0YXRlbWVudHMpIHtcbiAgICAgICAgdGhpcy5pZlN0YXRlbWVudC5mYWxzZUJyYW5jaFN0YXRlbWVudCA9IG5ldyBTZXF1ZW50aWFsU3RhdGVtZW50R3JvdXAoc3RhdGVtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzLmlmU3RhdGVtZW50O1xuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWZTdGF0ZW1lbnQucnVuKCk7XG4gICAgfVxufVxuXG5sZXQgSUYgPSBmdW5jdGlvbihleHByKSB7XG4gICAgcmV0dXJuIG5ldyBJZkNvbmRpdGlvbk5vZGUoZXhwcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSUY7XG4iLCJpbXBvcnQge2lzUHJvbWlzZSwgZ2V0VmFsdWUsIGV4ZWN1dGVTdGF0ZW1lbnR9IGZyb20gJy4vVXRpbCc7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwIGV4dGVuZHMgU3RhdGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5XaXRoSW5kZXgoMCk7XG4gICAgfVxuXG4gICAgcnVuV2l0aEluZGV4KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA+PSB0aGlzLnN0YXRlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGVTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnRzW2luZGV4XSkpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuV2l0aEluZGV4KGluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGVtZW50IHtcbiAgICAvLyBhIHN0YXRlbWVudCBoYXMgYSBydW4gbWV0aG9kXG4gICAgLy8gUHJvbWlzZSBydW4oKTtcbn1cbiIsIi8vIFN5bnRheFxuLy8gVEhST1coZXJyb3IpXG5cbmxldCBUSFJPVyA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVEhST1c7XG5cbiIsIi8vIFN5bnRheDogVFJZKHN0YXRlbWVudCkuQ0FUQ0goaGFuZGxlcikuRklOQUxMWShoYW5kbGVyKVxuXG5pbXBvcnQge2lzUHJvbWlzZSwgZ2V0VmFsdWUsIGV4ZWN1dGVTdGF0ZW1lbnR9IGZyb20gJy4vVXRpbCc7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcbmltcG9ydCBTZXF1ZW50aWFsU3RhdGVtZW50R3JvdXAgZnJvbSAnLi9TZXF1ZW50aWFsU3RhdGVtZW50R3JvdXAnO1xuXG5jbGFzcyBUcnlDYXRjaEZpbmFsbHlTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICAgIC8vIHRyeUJsb2NrXG4gICAgLy8gY2F0Y2hCbG9ja1xuICAgIC8vIGZpbmFsbHlCbG9ja1xuICAgIGNvbnN0cnVjdG9yKHRyeUJsb2NrKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHJ5QmxvY2sgPSB0cnlCbG9jaztcbiAgICB9XG5cbiAgICBpbnZva2VDYXRjaEJsb2NrKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuY2F0Y2hCbG9jaykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyB1c2VyIG1heSB0aHJvdyBhbiBlcnJvciBieSByZXR1cm5pbmcgYSByZWplY3RlZCBwcm9taXNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNhdGNoQmxvY2soZSkpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggYmxvY2sgc3luY2hyb25vdXMgZXJyb3JcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gY2F0Y2ggYmxvY2ssIHN1cmZhY2UgdGhlIGVycm9yXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvcihlKSB7XG4gICAgICAgIGxldCBjYXRjaFByb21pc2U7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gY2F0Y2ggYmxvY2tcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52b2tlQ2F0Y2hCbG9jayhlKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNhdGNoIGJsb2NrICBhYnNvcmJlZCB0aGUgZXhjZXB0aW9uIFxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZVN0YXRlbWVudCh0aGlzLmZpbmFsbHlCbG9jaykpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNhdGNoIGJsb3cgZGlkIG5vdCBhYnNvcmIgdGhlIGV4Y2VwdGlvblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZVN0YXRlbWVudCh0aGlzLmZpbmFsbHlCbG9jaykpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmFsbHkgYmxvY2sgZGlkIG5vdCBibG93IHVwXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIGxldCB0cnlQcm9taXNlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0cnlQcm9taXNlID0gZXhlY3V0ZVN0YXRlbWVudCh0aGlzLnRyeUJsb2NrKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gd2UgaGF2ZSBzeW5jaHJvbm91cyBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJycm9yKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnlQcm9taXNlKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIG5vIGVycm9yLCBpbnZva2UgdGhlIGZpbmFsbHkgYmxvY2tcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGVTdGF0ZW1lbnQodGhpcy5maW5hbGx5QmxvY2spKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZWUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGFzeW5jIGVycm9yXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgVHJ5Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodHJ5QmxvY2spIHtcbiAgICAgICAgdGhpcy50cnlDYXRjaEZpbmFsbHlTdGF0ZW1lbnQgPSBuZXcgVHJ5Q2F0Y2hGaW5hbGx5U3RhdGVtZW50KHRyeUJsb2NrKTtcbiAgICB9XG5cbiAgICBDQVRDSChjYXRjaEJsb2NrKSB7XG4gICAgICAgIHRoaXMudHJ5Q2F0Y2hGaW5hbGx5U3RhdGVtZW50LmNhdGNoQmxvY2sgPSBjYXRjaEJsb2NrO1xuICAgICAgICByZXR1cm4gbmV3IFRyeUNhdGNoTm9kZSh0aGlzLnRyeUNhdGNoRmluYWxseVN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgRklOQUxMWShmaW5hbGx5QmxvY2spIHtcbiAgICAgICAgdGhpcy50cnlDYXRjaEZpbmFsbHlTdGF0ZW1lbnQuZmluYWxseUJsb2NrID0gbmV3IFRyeUNhdGNoRmluYWxseVN0YXRlbWVudChmaW5hbGx5QmxvY2spO1xuICAgICAgICByZXR1cm4gdGhpcy50cnlDYXRjaEZpbmFsbHlTdGF0ZW1lbnQ7XG4gICAgfVxufVxuXG5jbGFzcyBUcnlDYXRjaE5vZGUgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHRyeUNhdGNoRmluYWxseVN0YXRlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRyeUNhdGNoRmluYWxseVN0YXRlbWVudCA9IHRyeUNhdGNoRmluYWxseVN0YXRlbWVudDtcbiAgICB9XG5cbiAgICBGSU5BTExZKGZpbmFsbHlCbG9jaykge1xuICAgICAgICB0aGlzLnRyeUNhdGNoRmluYWxseVN0YXRlbWVudC5maW5hbGx5QmxvY2sgPSBmaW5hbGx5QmxvY2s7XG4gICAgICAgIHJldHVybiB0aGlzLnRyeUNhdGNoRmluYWxseVN0YXRlbWVudDtcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyeUNhdGNoRmluYWxseVN0YXRlbWVudC5ydW4oKTtcbiAgICB9XG59XG5cbmxldCBUUlkgPSBmdW5jdGlvbiguLi4gc3RhdGVtZW50cykge1xuICAgIHJldHVybiBuZXcgVHJ5Tm9kZShuZXcgU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwKHN0YXRlbWVudHMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUUlk7XG4iLCJpbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mKHZhbHVlLnRoZW4pID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgIHR5cGVvZih2YWx1ZS5jYXRjaCkgPT09ICdmdW5jdGlvbicpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gdmFsdWUucnVuKCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jYWxsICYmIHZhbHVlLmFwcGx5ICYmIHZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4ZWN1dGVTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgaWYgKHN0YXRlbWVudCBpbnN0YW5jZW9mIFN0YXRlbWVudCkge1xuICAgICAgICByZXR1cm4gc3RhdGVtZW50LnJ1bigpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnQgJiYgc3RhdGVtZW50LmNvbnN0cnVjdG9yICYmIHN0YXRlbWVudC5jYWxsICYmIHN0YXRlbWVudC5hcHBseSAmJiBzdGF0ZW1lbnQubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbn1cbiIsIi8vIFN5bnRheFxuLy8gV0hJTEUgKGNvbmRpdGlvbkV4cHIpLkRPKHN0YXRlbWVudClcblxuaW1wb3J0IHtpc1Byb21pc2UsIGdldFZhbHVlLCBleGVjdXRlU3RhdGVtZW50fSBmcm9tICcuL1V0aWwnO1xuaW1wb3J0IFN0YXRlbWVudCBmcm9tICcuL1N0YXRlbWVudCc7XG5pbXBvcnQgU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwIGZyb20gJy4vU2VxdWVudGlhbFN0YXRlbWVudEdyb3VwJztcbmltcG9ydCBCcmVha0Vycm9yIGZyb20gJy4vQnJlYWtFcnJvcic7XG5pbXBvcnQgQ29udGludWVFcnJvciBmcm9tICcuL0NvbnRpbnVlRXJyb3InO1xuXG5jbGFzcyBXaGlsZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG4gICAgLy8gY29uZGl0aW9uRXhwcjtcbiAgICAvLyBib2R5U3RhdGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uRXhwcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbkV4cHIgPSBjb25kaXRpb25FeHByO1xuICAgICAgICB0aGlzLnJ1biA9IHRoaXMucnVuLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGdldFZhbHVlKHRoaXMuY29uZGl0aW9uRXhwcikpLnRoZW4oXG4gICAgICAgICAgICAocmVzb2x2ZWRDb25kaXRpb25WYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzb2x2ZWRDb25kaXRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZVN0YXRlbWVudCh0aGlzLmJvZHlTdGF0ZW1lbnQpKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bixcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBCcmVha0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQ29udGludWVFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yOyAvLyB1bmhhbmRsZWQgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBXaGxpZUNvbmRpdGlvbk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbkV4cHIpIHtcbiAgICAgICAgdGhpcy53aGlsZVN0YXRlbWVudCA9IG5ldyBXaGlsZVN0YXRlbWVudChjb25kaXRpb25FeHByKTtcbiAgICB9XG4gICAgXG4gICAgRE8oLi4uIHN0YXRlbWVudHMpIHtcbiAgICAgICAgdGhpcy53aGlsZVN0YXRlbWVudC5ib2R5U3RhdGVtZW50ID0gbmV3IFNlcXVlbnRpYWxTdGF0ZW1lbnRHcm91cChzdGF0ZW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud2hpbGVTdGF0ZW1lbnQ7XG4gICAgfVxufVxuXG5sZXQgV0hJTEUgPSBmdW5jdGlvbihjb25kaXRpb25FeHByKSB7XG4gICAgcmV0dXJuIG5ldyBXaGxpZUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uRXhwcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV0hJTEU7XG5cbiIsImltcG9ydCBJRiBmcm9tICcuL0lmJztcbmltcG9ydCBGT1IgZnJvbSAnLi9Gb3InO1xuaW1wb3J0IFdISUxFIGZyb20gJy4vV2hpbGUnO1xuaW1wb3J0IERPIGZyb20gJy4vRG8nO1xuaW1wb3J0IEJSRUFLIGZyb20gJy4vQnJlYWsnO1xuaW1wb3J0IENPTlRJTlVFIGZyb20gJy4vQ29udGludWUnO1xuaW1wb3J0IFRSWSBmcm9tICcuL1RyeSc7XG5pbXBvcnQgVEhST1cgZnJvbSAnLi9UaHJvdyc7XG5cbmdsb2JhbFsnSUYnXSAgICAgICAgPSBJRjtcbmdsb2JhbFsnRk9SJ10gICAgICAgPSBGT1I7XG5nbG9iYWxbJ1dISUxFJ10gICAgID0gV0hJTEU7XG5nbG9iYWxbJ0RPJ10gICAgICAgID0gRE87XG5nbG9iYWxbJ0JSRUFLJ10gICAgID0gQlJFQUs7XG5nbG9iYWxbJ0NPTlRJTlVFJ10gID0gQ09OVElOVUU7XG5nbG9iYWxbJ1RSWSddICAgICAgID0gVFJZO1xuZ2xvYmFsWydUSFJPVyddICAgICA9IFRIUk9XO1xuXG5tb2R1bGUuZXhwb3J0ID0ge307IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgY2xzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IGNscyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gIH0gZWxzZSB7XG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICB9XG5cbiAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKCkge1xuICAgIHZhciBtZXNzYWdlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMF07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgIC8vIGV4dGVuZGluZyBFcnJvciBpcyB3ZWlyZCBhbmQgZG9lcyBub3QgcHJvcGFnYXRlIGBtZXNzYWdlYFxuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikuY2FsbCh0aGlzLCBtZXNzYWdlKSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX3RoaXMsICdtZXNzYWdlJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbWVzc2FnZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX3RoaXMsICduYW1lJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogX3RoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAoRXJyb3IuaGFzT3duUHJvcGVydHkoJ2NhcHR1cmVTdGFja1RyYWNlJykpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfdGhpcywgJ3N0YWNrJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gRXh0ZW5kYWJsZUVycm9yO1xufShfZXh0ZW5kYWJsZUJ1aWx0aW4oRXJyb3IpKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRXh0ZW5kYWJsZUVycm9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107Il19
