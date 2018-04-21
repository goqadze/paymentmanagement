/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(19);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configureStore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(17);



var store = Object(__WEBPACK_IMPORTED_MODULE_0__configureStore__["a" /* default */])();

window['store'] = store;

/* unused harmony default export */ var _unused_webpack_default_export = (store);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middlewares__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(8);




var wrapDispatchWithMiddlewares = function wrapDispatchWithMiddlewares(store, middlewares) {
    middlewares.slice().reverse().forEach(function (middleware) {
        store.dispatch = middleware(store)(store.dispatch);
    });
};

var configureStore = function configureStore() {
    var store = Object(__WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */]);
    var middlewares = [__WEBPACK_IMPORTED_MODULE_1__middlewares__["b" /* thunk */], __WEBPACK_IMPORTED_MODULE_1__middlewares__["a" /* logger */]];

    wrapDispatchWithMiddlewares(store, middlewares);

    return store;
};

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var createStore = function createStore(reducer) {
    var state = void 0;
    var listeners = [];

    var getState = function getState() {
        return state;
    };

    var dispatch = function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(function (listener) {
            return listener();
        });
    };

    var subscribe = function subscribe(listener) {
        listeners.push(listener);
        //return subscription for unsubscribe
        return function () {
            listeners = listeners.filter(function (l) {
                return l !== listener;
            });
        };
    };

    dispatch({}); // get initial value

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    };
};

/* harmony default export */ __webpack_exports__["a"] = (createStore);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__logger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thunk__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__thunk__["a"]; });



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var logger = function logger(store) {
    return function (next) {
        if (!console.group) {
            return next;
        }

        return function (action) {
            console.group(action.type);
            console.log('%c prev state', 'color: gray', store.getState());
            console.log('%c action', 'color: blue', action);
            var returnValue = next(action);
            console.log('%c next state', 'color: green', store.getState());
            console.groupEnd();
            return returnValue;
        };
    };
};

/* harmony default export */ __webpack_exports__["a"] = (logger);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var thunk = function thunk(store) {
    return function (next) {
        return function (action) {
            return typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
        };
    };
};

/* harmony default export */ __webpack_exports__["a"] = (thunk);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getIsFetching */
/* unused harmony export getIsAdding */
/* unused harmony export getSelectedCategory */
/* unused harmony export getPayments */
/* unused harmony export getPaymentsCurrentYear */
/* unused harmony export getLastAction */
/* unused harmony export getErrorMessages */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isAdding__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFetching__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectedCategory__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paymentsCurrentYear__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lastAction__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errorMessages__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categories__ = __webpack_require__(16);









var combineReducers = function combineReducers(reducers) {
    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        return Object.keys(reducers).reduce(function (nextState, key) {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    };
};

var paymentApp = combineReducers({
    isAdding: __WEBPACK_IMPORTED_MODULE_0__isAdding__["a" /* default */],
    isFetching: __WEBPACK_IMPORTED_MODULE_1__isFetching__["a" /* default */],
    selectedCategory: __WEBPACK_IMPORTED_MODULE_2__selectedCategory__["a" /* default */],
    payments: __WEBPACK_IMPORTED_MODULE_3__payments__["a" /* default */],
    categories: __WEBPACK_IMPORTED_MODULE_7__categories__["a" /* default */],
    paymentsCurrentYear: __WEBPACK_IMPORTED_MODULE_4__paymentsCurrentYear__["a" /* default */],
    lastAction: __WEBPACK_IMPORTED_MODULE_5__lastAction__["a" /* default */],
    errorMessages: __WEBPACK_IMPORTED_MODULE_6__errorMessages__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (paymentApp);

var getIsFetching = function getIsFetching(state) {
    return state.isFetching;
};
var getIsAdding = function getIsAdding(state) {
    return state.isAdding;
};
var getSelectedCategory = function getSelectedCategory(state) {
    return state.selectedCategory;
};
var getPayments = function getPayments(state) {
    return state.payments;
};
var getPaymentsCurrentYear = function getPaymentsCurrentYear(state) {
    return state.paymentsCurrentYear;
};
var getLastAction = function getLastAction(state) {
    return state.lastAction;
};
var getErrorMessages = function getErrorMessages(state) {
    return state.errorMessages;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isAdding = function isAdding() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_PAYMENT_REQUEST':
            return true;
        case 'ADD_PAYMENT_SUCCESS':
        case 'ADD_PAYMENT_FAILURE':
            return false;
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (isAdding);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isFetching = function isFetching() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case 'FETCH_PAYMENTS_REQUEST':
            return true;
        case 'FETCH_PAYMENTS_SUCCESS':
        case 'FETCH_PAYMENTS_FAILURE':
            return false;
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (isFetching);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var selectedCategory = function selectedCategory() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var action = arguments[1];

    switch (action.type) {
        case 'CATEGORY_CHANGED':
            return +action.category_id;
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (selectedCategory);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var payments = function payments() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_PAYMENT_SUCCESS':
            return [].concat(_toConsumableArray(state), [action.response]).sort(function (a, b) {
                return a.created_at < b.created_at ? 1 : -1;
            });
        case 'FETCH_PAYMENTS_SUCCESS':
            return action.response.slice();
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (payments);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var paymentsCurrentYear = function paymentsCurrentYear() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'FETCH_CURRENT_YEAR_PAYMENTS_SUCCESS':
            return action.response.slice();
        case 'ADD_PAYMENT_SUCCESS':
            return new Date(action.response.created_at).getFullYear() === new Date().getFullYear() ? [].concat(_toConsumableArray(state), [action.response]) : state;
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (paymentsCurrentYear);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lastAction = function lastAction() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    return action.type;
};

/* harmony default export */ __webpack_exports__["a"] = (lastAction);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var errorMessages = function errorMessages() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_PAYMENT_FAILURE':
            return action.errors;
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (errorMessages);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var categories = function categories() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return action.response.slice();
        default:
            return state;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (categories);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchCurrentYearPayments */
/* unused harmony export fetchPayments */
/* unused harmony export addPayment */
/* unused harmony export fetchCategories */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(18);


var fetchCurrentYearPayments = function fetchCurrentYearPayments() {
    var currentYear = new Date(new Date().getFullYear(), 0, 1);
    var filter = {
        min_date: currentYear
    };

    return fetchPayments(filter, 'FETCH_CURRENT_YEAR_PAYMENTS');
};

var fetchPayments = function fetchPayments() {
    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'FETCH_PAYMENTS';
    return function (dispatch, getState) {
        dispatch({
            type: type + '_REQUEST',
            filter: filter
        });

        return __WEBPACK_IMPORTED_MODULE_0__api__["c" /* fetchPayments */](filter).then(function (response) {
            dispatch({
                type: type + '_SUCCESS',
                filter: filter,
                response: response
            });
        }, function (error) {
            dispatch({
                type: type + '_FAILURE',
                filter: filter,
                error: error.errors || 'Something went wrong.'
            });
        });
    };
};

var addPayment = function addPayment(newPayment) {
    return function (dispatch, getState) {
        dispatch({
            type: 'ADD_PAYMENT_REQUEST',
            newPayment: newPayment
        });

        return __WEBPACK_IMPORTED_MODULE_0__api__["a" /* addPayment */](newPayment).then(function (response) {
            dispatch({
                type: 'ADD_PAYMENT_SUCCESS',
                response: response
            });
        }, function (error) {
            dispatch({
                type: 'ADD_PAYMENT_FAILURE',
                errors: error.errors || 'Something went wrong.'
            });
        });
    };
};

var fetchCategories = function fetchCategories() {
    return function (dispatch, getState) {
        return __WEBPACK_IMPORTED_MODULE_0__api__["b" /* fetchCategories */]().then(function (response) {
            dispatch({
                type: 'FETCH_CATEGORIES_SUCCESS',
                response: response
            });
        });
    };
};

var actions = {};
window['actions'] = actions;

actions['fetchCurrentYearPayments'] = fetchCurrentYearPayments;
actions['fetchPayments'] = fetchPayments;
actions['addPayment'] = addPayment;
actions['fetchCategories'] = fetchCategories;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fetchPayments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fetchCategories; });
var queryParams = function queryParams(params) {
    return Object.keys(params).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
    }).join('&');
};

var fetchPayments = function fetchPayments(filter) {
    var url = '/filter?' + queryParams(filter);
    return fetch(url).then(function (res) {
        return res.json();
    });
};

var addPayment = function addPayment(data) {
    return fetch("/store", {
        method: "POST",
        body: data
    }).then(function (res) {
        return res.json();
    }).then(function (res) {
        return !!res.errors ? Promise.reject(res) : Promise.resolve(res);
    });
};

var fetchCategories = function fetchCategories() {
    return fetch('categories').then(function (res) {
        return res.json();
    });
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);