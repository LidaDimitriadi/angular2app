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
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var VisitedRoutesComponent = (function () {
    function VisitedRoutesComponent() {
    }
    __decorate([
        ng2_redux_1.select(), 
        __metadata('design:type', Object)
    ], VisitedRoutesComponent.prototype, "visitedRoutes", void 0);
    VisitedRoutesComponent = __decorate([
        core_1.Component({
            selector: 'visited-routes',
            moduleId: module.id,
            styleUrls: ['./visited-routes.component.css'],
            templateUrl: './visited-routes.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], VisitedRoutesComponent);
    return VisitedRoutesComponent;
}());
exports.VisitedRoutesComponent = VisitedRoutesComponent;
//# sourceMappingURL=visited-routes.component.js.map