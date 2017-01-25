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
var StarRating = (function () {
    function StarRating() {
        this.notify = new core_1.EventEmitter();
    }
    StarRating.prototype.ngOnChanges = function () {
        console.log(this.rating);
        this.starWidth = this.rating * 100 / 5;
    };
    StarRating.prototype.OnClick = function () {
        this.notify.emit("Rating " + this.rating + " was clicked!");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarRating.prototype, "rating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], StarRating.prototype, "notify", void 0);
    StarRating = __decorate([
        core_1.Component({
            selector: 'ai-star',
            moduleId: module.id,
            templateUrl: 'star.component.html',
            styleUrls: ['star.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], StarRating);
    return StarRating;
}());
exports.StarRating = StarRating;
//# sourceMappingURL=star.component.js.map