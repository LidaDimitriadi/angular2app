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
var router_1 = require('@angular/router');
var welcome_component_1 = require('../home/welcome.component');
var product_list_component_1 = require('../products/product-list.component');
var router_component_1 = require('./router.component');
var product_guard_service_1 = require('../products/product-guard.service');
var product_detail_component_1 = require('../products/product-detail.component');
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    { path: 'product/:id',
                        canActivate: [product_guard_service_1.ProductGuardService],
                        component: product_detail_component_1.ProductDetailComponent }
                ])
            ],
            declarations: [
                router_component_1.AppRouterComponent
            ],
            exports: [
                router_1.RouterModule,
                router_component_1.AppRouterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRouterModule);
    return AppRouterModule;
}());
exports.AppRouterModule = AppRouterModule;
//# sourceMappingURL=router.module.js.map