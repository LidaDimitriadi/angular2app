"use strict";
var handlingView_1 = require('../helpers/handlingView');
var actions = require('./actions');
exports.updateFilterAction = function (filterStr) { return ({ type: actions.UPDATE_FILTER, payload: filterStr }); };
exports.updateVisitedRoutesAction = function (route) { return ({ type: actions.UPDATE_VISITED_ROUTES, payload: route }); };
exports.actionsCreators = {
    updateFilterAction: exports.updateFilterAction,
    updateVisitedRoutesAction: exports.updateVisitedRoutesAction
};
exports.ACTION_HANDLERS = (_a = {},
    _a[actions.UPDATE_FILTER] = function (state, action) {
        return {
            filterStr: action.payload,
            visitedRoutes: state.visitedRoutes
        };
    },
    _a[actions.UPDATE_VISITED_ROUTES] = function (state, action) {
        return {
            filterStr: state.filterStr,
            visitedRoutes: handlingView_1.addRoute(state.visitedRoutes, action.payload)
        };
    },
    _a
);
function appReducer(state, action) {
    var handler = exports.ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
exports.appReducer = appReducer;
;
var _a;
//# sourceMappingURL=redux-state.js.map