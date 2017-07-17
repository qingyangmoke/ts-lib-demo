/*!
 * ts-lib-demo
 * Description: TS 测试项目
 * Author: 采东
 * Version: v0.0.1
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Demo"] = factory();
	else
		root["Demo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Sheep = exports.Dog = undefined;

	var _Dog = __webpack_require__(2);

	var _Dog2 = _interopRequireDefault(_Dog);

	var _Sheep = __webpack_require__(6);

	var _Sheep2 = _interopRequireDefault(_Sheep);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Dog = _Dog2.default;
	exports.Sheep = _Sheep2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Animal2 = __webpack_require__(3);

	var _Animal3 = _interopRequireDefault(_Animal2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dog = function (_Animal) {
	    _inherits(Dog, _Animal);

	    function Dog() {
	        _classCallCheck(this, Dog);

	        return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, 'Dog'));
	    }

	    _createClass(Dog, [{
	        key: 'eat',
	        value: function eat(food) {
	            console.log(this.name + ' eat ' + food);
	        }
	    }]);

	    return Dog;
	}(_Animal3.default);

	exports.default = Dog;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _tslib = __webpack_require__(4);

	var tslib_1 = _interopRequireWildcard(_tslib);

	var _Enums = __webpack_require__(5);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Animal = function () {
	    function Animal(name) {
	        _classCallCheck(this, Animal);

	        this._sex = _Enums.SEX.MALE;
	        this._name = name;
	    }

	    _createClass(Animal, [{
	        key: 'say',
	        value: function say() {
	            console.log('i am ' + this.name);
	        }
	    }, {
	        key: 'doSomeThing',
	        value: function doSomeThing() {
	            return tslib_1.__awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
	                var result;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                _context.next = 2;
	                                return new Promise(function (resolve, reject) {
	                                    setTimeout(function () {
	                                        resolve('play games');
	                                    }, 2000);
	                                });

	                            case 2:
	                                result = _context.sent;

	                                console.log('doSomeThing:', result);

	                            case 4:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	        }
	    }, {
	        key: 'addFood',
	        value: function addFood() {
	            for (var _len = arguments.length, abc = Array(_len), _key = 0; _key < _len; _key++) {
	                abc[_key] = arguments[_key];
	            }

	            console.log(abc);
	        }
	    }, {
	        key: 'name',
	        get: function get() {
	            return this._name;
	        }
	    }, {
	        key: 'sex',
	        get: function get() {
	            return this._sex;
	        }
	    }], [{
	        key: 'staticMethod',
	        value: function staticMethod() {
	            console.log('this is a staticMethod');
	        }
	    }]);

	    return Animal;
	}();

	exports.default = Animal;

	Animal.type = 'Animal';

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global global, define, System, Reflect, Promise */
	var __extends;
	var __assign;
	var __rest;
	var __decorate;
	var __param;
	var __metadata;
	var __awaiter;
	var __generator;
	var __exportStar;
	var __values;
	var __read;
	var __spread;
	var _await;
	var __asyncGenerator;
	var __asyncDelegator;
	var __asyncValues;
	(function (factory) {
	    var root = (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : _typeof(this) === "object" ? this : {};
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports) {
	            factory(createExporter(root, createExporter(exports)));
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
	        factory(createExporter(root, createExporter(module.exports)));
	    } else {
	        factory(createExporter(root));
	    }
	    function createExporter(exports, previous) {
	        return function (id, v) {
	            return exports[id] = previous ? previous(id, v) : v;
	        };
	    }
	})(function (exporter) {
	    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
	        d.__proto__ = b;
	    } || function (d, b) {
	        for (var p in b) {
	            if (b.hasOwnProperty(p)) d[p] = b[p];
	        }
	    };

	    __extends = function __extends(d, b) {
	        extendStatics(d, b);
	        function __() {
	            this.constructor = d;
	        }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };

	    __assign = Object.assign || function (t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) {
	                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	            }
	        }
	        return t;
	    };

	    __rest = function __rest(s, e) {
	        var t = {};
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	        }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	        }return t;
	    };

	    __decorate = function __decorate(decorators, target, key, desc) {
	        var c = arguments.length,
	            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	            d;
	        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
	            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	        }return c > 3 && r && Object.defineProperty(target, key, r), r;
	    };

	    __param = function __param(paramIndex, decorator) {
	        return function (target, key) {
	            decorator(target, key, paramIndex);
	        };
	    };

	    __metadata = function __metadata(metadataKey, metadataValue) {
	        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	    };

	    __awaiter = function __awaiter(thisArg, _arguments, P, generator) {
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) {
	                try {
	                    step(generator.next(value));
	                } catch (e) {
	                    reject(e);
	                }
	            }
	            function rejected(value) {
	                try {
	                    step(generator["throw"](value));
	                } catch (e) {
	                    reject(e);
	                }
	            }
	            function step(result) {
	                result.done ? resolve(result.value) : new P(function (resolve) {
	                    resolve(result.value);
	                }).then(fulfilled, rejected);
	            }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    };

	    __generator = function __generator(thisArg, body) {
	        var _ = { label: 0, sent: function sent() {
	                if (t[0] & 1) throw t[1];return t[1];
	            }, trys: [], ops: [] },
	            f,
	            y,
	            t,
	            g;
	        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
	            return this;
	        }), g;
	        function verb(n) {
	            return function (v) {
	                return step([n, v]);
	            };
	        }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) {
	                try {
	                    if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	                    if (y = 0, t) op = [0, t.value];
	                    switch (op[0]) {
	                        case 0:case 1:
	                            t = op;break;
	                        case 4:
	                            _.label++;return { value: op[1], done: false };
	                        case 5:
	                            _.label++;y = op[1];op = [0];continue;
	                        case 7:
	                            op = _.ops.pop();_.trys.pop();continue;
	                        default:
	                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
	                                _ = 0;continue;
	                            }
	                            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
	                                _.label = op[1];break;
	                            }
	                            if (op[0] === 6 && _.label < t[1]) {
	                                _.label = t[1];t = op;break;
	                            }
	                            if (t && _.label < t[2]) {
	                                _.label = t[2];_.ops.push(op);break;
	                            }
	                            if (t[2]) _.ops.pop();
	                            _.trys.pop();continue;
	                    }
	                    op = body.call(thisArg, _);
	                } catch (e) {
	                    op = [6, e];y = 0;
	                } finally {
	                    f = t = 0;
	                }
	            }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    };

	    __exportStar = function __exportStar(m, exports) {
	        for (var p in m) {
	            if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	        }
	    };

	    __values = function __values(o) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator],
	            i = 0;
	        if (m) return m.call(o);
	        return {
	            next: function next() {
	                if (o && i >= o.length) o = void 0;
	                return { value: o && o[i++], done: !o };
	            }
	        };
	    };

	    __read = function __read(o, n) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator];
	        if (!m) return o;
	        var i = m.call(o),
	            r,
	            ar = [],
	            e;
	        try {
	            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	                ar.push(r.value);
	            }
	        } catch (error) {
	            e = { error: error };
	        } finally {
	            try {
	                if (r && !r.done && (m = i["return"])) m.call(i);
	            } finally {
	                if (e) throw e.error;
	            }
	        }
	        return ar;
	    };

	    __spread = function __spread() {
	        for (var ar = [], i = 0; i < arguments.length; i++) {
	            ar = ar.concat(__read(arguments[i]));
	        }return ar;
	    };

	    _await = function __await(v) {
	        return this instanceof _await ? (this.v = v, this) : new _await(v);
	    };

	    __asyncGenerator = function __asyncGenerator(thisArg, _arguments, generator) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var g = generator.apply(thisArg, _arguments || []),
	            i,
	            q = [];
	        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
	            return this;
	        }, i;
	        function verb(n) {
	            if (g[n]) i[n] = function (v) {
	                return new Promise(function (a, b) {
	                    q.push([n, v, a, b]) > 1 || resume(n, v);
	                });
	            };
	        }
	        function resume(n, v) {
	            try {
	                step(g[n](v));
	            } catch (e) {
	                settle(q[0][3], e);
	            }
	        }
	        function step(r) {
	            r.value instanceof _await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
	        }
	        function fulfill(value) {
	            resume("next", value);
	        }
	        function reject(value) {
	            resume("throw", value);
	        }
	        function settle(f, v) {
	            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
	        }
	    };

	    __asyncDelegator = function __asyncDelegator(o) {
	        var i, p;
	        return i = {}, verb("next"), verb("throw", function (e) {
	            throw e;
	        }), verb("return"), i[Symbol.iterator] = function () {
	            return this;
	        }, i;
	        function verb(n, f) {
	            if (o[n]) i[n] = function (v) {
	                return (p = !p) ? { value: _await(o[n](v)), done: n === "return" } : f ? f(v) : v;
	            };
	        }
	    };

	    __asyncValues = function __asyncValues(o) {
	        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	        var m = o[Symbol.asyncIterator];
	        return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
	    };

	    exporter("__extends", __extends);
	    exporter("__assign", __assign);
	    exporter("__rest", __rest);
	    exporter("__decorate", __decorate);
	    exporter("__param", __param);
	    exporter("__metadata", __metadata);
	    exporter("__awaiter", __awaiter);
	    exporter("__generator", __generator);
	    exporter("__exportStar", __exportStar);
	    exporter("__values", __values);
	    exporter("__read", __read);
	    exporter("__spread", __spread);
	    exporter("__await", _await);
	    exporter("__asyncGenerator", __asyncGenerator);
	    exporter("__asyncDelegator", __asyncDelegator);
	    exporter("__asyncValues", __asyncValues);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var SEX = exports.SEX = undefined;
	(function (SEX) {
	    SEX[SEX["MALE"] = 0] = "MALE";
	    SEX[SEX["FEMALE"] = 1] = "FEMALE";
	})(SEX || (exports.SEX = SEX = {}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Animal2 = __webpack_require__(3);

	var _Animal3 = _interopRequireDefault(_Animal2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sheep = function (_Animal) {
	    _inherits(Sheep, _Animal);

	    function Sheep() {
	        _classCallCheck(this, Sheep);

	        return _possibleConstructorReturn(this, (Sheep.__proto__ || Object.getPrototypeOf(Sheep)).call(this, 'Sheep'));
	    }

	    return Sheep;
	}(_Animal3.default);

	exports.default = Sheep;

/***/ })
/******/ ])
});
;