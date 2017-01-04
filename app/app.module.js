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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
;
var products_module_1 = require('./products/products.module');
var sample1_module_1 = require('./sample1/sample1.module');
var sample2_module_1 = require('./sample2/sample2.module');
var sample3_module_1 = require('./sample3/sample3.module');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./home/welcome.component');
var visited_routes_component_1 = require('./shared/visited-routes.component');
var ng2_redux_1 = require('ng2-redux');
var redux_state_1 = require('./state-management/redux-state');
var initialState = {
    filterStr: "",
    visitedRoutes: []
};
var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(redux_state_1.appReducer, initialState);
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                products_module_1.ProductsModule,
                sample1_module_1.Sample1Module,
                sample2_module_1.Sample2Module,
                sample3_module_1.Sample3Module,
                app_routing_1.Routing,
                ng2_redux_1.NgReduxModule
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                visited_routes_component_1.VisitedRoutesComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                app_routing_1.AppRoutingProviders,
                ng2_redux_1.NgRedux
            ]
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map