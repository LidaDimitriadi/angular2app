"use strict";
exports.addRoute = function (routes, route) {
    console.log("in add route");
    var index = -1;
    routes.forEach(function (x) {
        if (x.id == route.id && x.route == route.route) {
            index = routes.indexOf(x);
        }
    });
    console.log(index);
    if (index == -1) {
        if (routes.length == 3) {
            return routes.slice(1, routes.length - 1);
        }
        console.log(routes);
        console.log(routes.concat(route));
        return routes.concat(route);
    }
    console.log(routes);
    return routes;
};
//# sourceMappingURL=handlingView.js.map