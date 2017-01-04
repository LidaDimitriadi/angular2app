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
var actions_1 = require('../state-management/actions');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var ProductListComponent = (function () {
    function ProductListComponent(_productService, ngRedux) {
        this._productService = _productService;
        this.ngRedux = ngRedux;
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 5;
        this.showImages = false;
        //filterStr: string = this._testRedux.store.getState().filterStr;
        //@select() filterStr;
        this.filterStr = this.ngRedux.getState().filterStr;
    }
    ;
    ProductListComponent.prototype.toggleImage = function () {
        this.showImages = !this.showImages;
    };
    ;
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; }, function () { return console.log("completed http request!!"); });
        this.ngRedux.dispatch({ type: actions_1.UPDATE_VISITED_ROUTES, payload: { route: 'products' } });
        console.log(this.ngRedux.getState());
        console.log(this.filterStr);
        //this.filterStr = this.ngRedux.select('filterStr');
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.ngRedux.dispatch({ type: actions_1.UPDATE_FILTER, payload: this.filterStr });
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
        __metadata('design:paramtypes', [product_service_1.ProductService, ng2_redux_1.NgRedux])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map