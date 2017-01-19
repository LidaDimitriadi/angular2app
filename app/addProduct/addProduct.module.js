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
var addProduct_component_1 = require('./addProduct.component');
var addProduct_routing_1 = require('./addProduct.routing');
var forms_1 = require('@angular/forms');
var product_service_1 = require('../products/product.service');
var AddProductModule = (function () {
    function AddProductModule() {
    }
    AddProductModule = __decorate([
        core_1.NgModule({
            imports: [
                addProduct_routing_1.AddProductRouting,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                addProduct_component_1.AddProductComponent
            ],
            providers: [
                product_service_1.ProductService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddProductModule);
    return AddProductModule;
}());
exports.AddProductModule = AddProductModule;
;
//# sourceMappingURL=addProduct.module.js.map