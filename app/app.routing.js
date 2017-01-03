"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./home/welcome.component');
exports.AppRoutingProviders = [];
exports.Routing = router_1.RouterModule.forRoot([
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
]);
//# sourceMappingURL=app.routing.js.map