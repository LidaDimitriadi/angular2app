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
var product_service_1 = require('./product.service');
var ng2_redux_1 = require('ng2-redux');
var actions_1 = require('../state-management/actions');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _service, _router, ngRedux) {
        this._route = _route;
        this._service = _service;
        this._router = _router;
        this.ngRedux = ngRedux;
        this.imageWidth = 300;
        this.imageMargin = 10;
        this.review = { content: "" };
    }
    ;
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.forEach(function () {
            var id = +_this._route.snapshot.params['id'];
            _this.pageTitle = "Product Details: " + id;
            _this._service.getProductById(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
            _this.ngRedux.dispatch({ type: actions_1.UPDATE_VISITED_ROUTES, payload: { route: 'product', id: id } });
        });
    };
    ProductDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log("in onchanges");
        this._service.getProductById(this.product.id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.OnBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.addReview = function () {
        var _this = this;
        this._service.updateProduct(this.product.id, this.review)
            .subscribe(function () {
            _this._service.getProductById(_this.product.id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
            _this.review = { content: "" };
        });
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'product-detail.component.html',
            styleUrls: ['product-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_service_1.ProductService, router_1.Router, ng2_redux_1.NgRedux])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map