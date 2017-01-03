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
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.pageTitle = "Third-Party Form Controls";
        this.startDate = new Date('Jan 1 2017');
        this.minDate = new Date('Jan 17 2017');
        this.startTime = new Date('Nov 21 2016 5:05 PM');
        this.onOffSwitch = "On";
        this.postRating = 5;
    }
    WelcomeComponent.prototype.hover = function (value) {
        console.log("Hover: " + value);
    };
    WelcomeComponent.prototype.leave = function (value) {
        console.log("Leave: " + value);
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/welcome.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map