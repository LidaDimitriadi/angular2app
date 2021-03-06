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
var shared_module_1 = require('./shared.module');
var router_1 = require('@angular/router');
var router_module_1 = require('./router.module');
var product_list_component_1 = require('./products/product-list.component');
var product_detail_component_1 = require('./products/product-detail.component');
var product_filter_pipe_1 = require('./products/product-filter.pipe');
var product_guard_service_1 = require('./products/product-guard.service');
var product_service_1 = require('./products/product.service');
var ProductsModule = (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_module_1.AppRouterModule,
                router_1.RouterModule.forChild([
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    { path: 'product/:id',
                        canActivate: [product_guard_service_1.ProductGuardService],
                        component: product_detail_component_1.ProductDetailComponent }
                ])
            ],
            declarations: [
                product_detail_component_1.ProductDetailComponent,
                product_filter_pipe_1.ProductFilterPipe,
                product_list_component_1.ProductListComponent
            ],
            providers: [
                product_guard_service_1.ProductGuardService,
                product_service_1.ProductService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map