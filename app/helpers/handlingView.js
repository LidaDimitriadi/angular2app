"use strict";
exports.addRoute = function (routes, route) {
    var index = -1;
    routes.forEach(function (x) {
        if (x.id == route.id && x.route == route.route) {
            index = routes.indexOf(x);
        }
    });
    console.log(index);
    if (index == -1) {
        if (routes.length == 12) {
            return (routes.slice(1, routes.length)).concat(route);
        }
        return routes.concat(route);
    }
    return routes;
};
//# sourceMappingURL=handlingView.js.map