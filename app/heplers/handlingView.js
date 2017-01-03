"use strict";
exports.addRoute = function (routes, route, id) {
    var index = -1;
    routes.forEach(function (x) {
        if (x.id == id && x.route == route) {
            index = routes.indexOf(x);
        }
    });
    if (index == -1) {
        if (routes.length == 3) {
            routes.shift();
        }
        routes.push({ route: route, id: id });
    }
};
//# sourceMappingURL=handlingView.js.map