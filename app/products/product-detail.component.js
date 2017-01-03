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
var redux_state_1 = require('../state-management/redux-state');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_route, _service, _router, _testRedux) {
        this._route = _route;
        this._service = _service;
        this._router = _router;
        this._testRedux = _testRedux;
        this.pageTitle = 'Product Details';
        this.imageWidth = 300;
        this.imageMargin = 10;
    }
    ;
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id;
        this._service.getProductById(id).subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this._testRedux.dispatchAddRouteAction({ route: 'product', id: +this._route.snapshot.params['id'] });
    };
    ProductDetailComponent.prototype.OnBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'product-detail.component.html',
            styleUrls: ['product-detail.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_service_1.ProductService, router_1.Router, redux_state_1.TestRedux])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map