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
var ng2_redux_1 = require('ng2-redux');
var actions_1 = require('../state-management/actions');
var product_service_1 = require('../products/product.service');
var AddProductComponent = (function () {
    function AddProductComponent(ngRedux, _productService) {
        this.ngRedux = ngRedux;
        this._productService = _productService;
        this.pageTitle = "Add new Product";
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: actions_1.UPDATE_VISITED_ROUTES, payload: { route: 'addProduct' } });
    };
    AddProductComponent.prototype.addProduct = function (product) {
        console.log(product);
    };
    AddProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'addProduct.component.html'
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux, product_service_1.ProductService])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=addProduct.component.js.map