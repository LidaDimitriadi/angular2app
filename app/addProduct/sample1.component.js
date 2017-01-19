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
var actions_1 = require('../state-management/actions');
var Sample1Component = (function () {
    function Sample1Component(ngRedux) {
        this.ngRedux = ngRedux;
        this.pageTitle = "Sample1 Route!";
    }
    Sample1Component.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: actions_1.UPDATE_VISITED_ROUTES, payload: { route: 'sample1' } });
    };
    Sample1Component = __decorate([
        core_1.Component({
            template: "\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n                {{ pageTitle }}\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], Sample1Component);
    return Sample1Component;
}());
exports.Sample1Component = Sample1Component;
//# sourceMappingURL=sample1.component.js.map