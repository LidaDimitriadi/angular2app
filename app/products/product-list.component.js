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
var product_service_1 = require('./product.service');
var redux_state_1 = require('../state-management/redux-state');
var ProductListComponent = (function () {
    function ProductListComponent(_productService, _testRedux) {
        this._productService = _productService;
        this._testRedux = _testRedux;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 5;
        this.showImages = false;
        this.filterStr = this._testRedux.store.getState().filterStr;
    }
    ;
    ProductListComponent.prototype.toggleImage = function () {
        this.showImages = !this.showImages;
    };
    ;
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; }, function () { return console.log("completed http request!!"); });
        this._testRedux.dispatchAddRouteAction({ route: 'products', id: 0 });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this._testRedux.dispatchFilterAction(this.filterStr);
    };
    ProductListComponent.prototype.ratingClickHandler = function (event) {
        console.log(event);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css'],
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, redux_state_1.TestRedux])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map