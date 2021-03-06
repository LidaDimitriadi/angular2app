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
var ng2_redux_1 = require('ng2-redux');
var router_1 = require('@angular/router');
var actions_1 = require('../state-management/actions');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var ProductListComponent = (function () {
    function ProductListComponent(_productService, _router, ngRedux) {
        this._productService = _productService;
        this._router = _router;
        this.ngRedux = ngRedux;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 5;
        this.showImages = false;
        this.filterStr = this.ngRedux.getState().filterStr;
    }
    ;
    ProductListComponent.prototype.toggleImage = function () {
        this.showImages = !this.showImages;
    };
    ;
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; }, function () { return console.log(_this.products); });
        this.ngRedux.dispatch({ type: actions_1.UPDATE_VISITED_ROUTES, payload: { route: 'products' } });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.ngRedux.dispatch({ type: actions_1.UPDATE_FILTER, payload: this.filterStr });
    };
    ProductListComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeAllRegistered();
    };
    ProductListComponent.prototype.ratingClickHandler = function (event) {
        console.log(event);
    };
    ProductListComponent.prototype.removeItem = function (id) {
        var _this = this;
        this._productService.removeProduct(id).subscribe(function () {
            _this._productService.getProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
        });
    };
    ProductListComponent.prototype.addNewItem = function () {
        this._router.navigate(['/addProduct']);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css'],
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, ng2_redux_1.NgRedux])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map