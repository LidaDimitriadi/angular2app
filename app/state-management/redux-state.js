"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var redux_1 = require('redux');
var core_1 = require('@angular/core');
var handlingView_1 = require('../helpers/handlingView');
exports.UPDATE_FILTER = 'UPDATE_FILTER';
exports.UPDATE_VISITED_ROUTES = 'UPDATE_VISITED_ROUTES';
exports.updateFilterAction = function (filterStr) { return ({ type: exports.UPDATE_FILTER, payload: filterStr }); };
exports.updateVisitedRoutesAction = function (route) { return ({ type: exports.UPDATE_VISITED_ROUTES, payload: route }); };
exports.actions = {
    updateFilterAction: exports.updateFilterAction,
    updateVisitedRoutesAction: exports.updateVisitedRoutesAction
};
exports.ACTION_HANDLERS = (_a = {},
    _a[exports.UPDATE_FILTER] = function (state, action) {
        return {
            filterStr: action.payload,
            visitedRoutes: state.visitedRoutes
        };
    },
    _a[exports.UPDATE_VISITED_ROUTES] = function (state, action) {
        return {
            filterStr: state.filterStr,
            visitedRoutes: handlingView_1.addRoute(state.visitedRoutes, action.payload)
        };
    },
    _a
);
exports.initialState = {
    filterStr: "",
    visitedRoutes: []
};
function appReducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    var handler = exports.ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
exports.appReducer = appReducer;
;
var TestRedux = (function () {
    function TestRedux() {
        var _this = this;
        this.store = redux_1.createStore(appReducer);
        this.dispatchFilterAction = function (testStr) {
            _this.store.dispatch(exports.updateFilterAction(testStr));
        };
        this.dispatchAddRouteAction = function (route) {
            _this.store.dispatch(exports.updateVisitedRoutesAction(route));
        };
    }
    TestRedux = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TestRedux);
    return TestRedux;
}());
exports.TestRedux = TestRedux;
var _a;
//# sourceMappingURL=redux-state.js.map