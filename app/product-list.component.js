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
var ProductListComponent = (function () {
    function ProductListComponent() {
        this.pageTitle = 'Product List';
        this.imageWidth = 50;
        this.imageMargin = 5;
        this.showImages = false;
        this.filterStr = "";
        this.products = [
            {
                "productId": 3,
                "productName": "A Garden Cart",
                "productCode": "GDN - 0023",
                "releaseDate": "March 18, 2016",
                "description": "15 galon capacity rolling",
                "price": 17.89,
                "starRating": 4.2,
                "imageUrl": "img/garden-cart.png"
            },
            {
                "productId": 5,
                "productName": "AB Hammer",
                "productCode": "TBX - 0048",
                "releaseDate": "November 13, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.90,
                "starRating": 2.3,
                "imageUrl": "img/rejon-Hammer.png"
            },
            {
                "productId": 11,
                "productName": "ABC Saw",
                "productCode": "TBX - 0022",
                "releaseDate": "November 16, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 49.90,
                "starRating": 2.8,
                "imageUrl": "img/power-saw.png"
            },
            {
                "productId": 17,
                "productName": "ABCD X - Box Controller",
                "productCode": "GMC - 0071",
                "releaseDate": "November 17, 2016",
                "description": "Standard video game controller",
                "price": 178.90,
                "starRating": 1.2,
                "imageUrl": "img/control.png"
            },
            {
                "productId": 21,
                "productName": "ABCDE Leaf Rake",
                "productCode": "GDN - 0011",
                "releaseDate": "November 21, 2016",
                "description": "Leaf rake with 48-inch wooden handle",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "img/leaf-rake.png"
            }
        ];
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImages = !this.showImages;
    };
    ;
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            templateUrl: 'app/products/product-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map