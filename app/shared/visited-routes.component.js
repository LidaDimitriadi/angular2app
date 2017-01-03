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
var redux_state_1 = require('../state-management/redux-state');
var VisitedRoutesComponent = (function () {
    function VisitedRoutesComponent(_testRedux) {
        this._testRedux = _testRedux;
        this.visitedRoutes = this.getRoutes();
    }
    VisitedRoutesComponent.prototype.getRoutes = function () {
        console.log("updating routes");
        console.log(this._testRedux.store.getState().visitedRoutes);
        return this._testRedux.store.getState().visitedRoutes;
    };
    ;
    VisitedRoutesComponent.prototype.ngOnInit = function () {
        console.log(this._testRedux.store.getState());
        this.visitedRoutes = this._testRedux.store.getState().visitedRoutes;
    };
    VisitedRoutesComponent = __decorate([
        core_1.Component({
            selector: 'visited-routes',
            moduleId: module.id,
            templateUrl: './visited-routes.component.html'
        }), 
        __metadata('design:paramtypes', [redux_state_1.TestRedux])
    ], VisitedRoutesComponent);
    return VisitedRoutesComponent;
}());
exports.VisitedRoutesComponent = VisitedRoutesComponent;
//# sourceMappingURL=visited-routes.component.js.map