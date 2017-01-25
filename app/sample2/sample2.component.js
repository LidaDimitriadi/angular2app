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
var Sample2Component = (function () {
    function Sample2Component(ngRedux) {
        this.ngRedux = ngRedux;
        this.pageTitle = "Sample2 Route!";
    }
    Sample2Component.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: actions_1.UPDATE_VISITED_ROUTES, payload: { route: 'sample2' } });
    };
    Sample2Component.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeAllRegistered();
    };
    Sample2Component = __decorate([
        core_1.Component({
            template: "\n                <form action=\"#\">\n                    <div class=\"mdl-textfield mdl-js-textfield\">\n                        <input class=\"mdl-textfield__input\" type=\"text\" id=\"username\"/>\n                        <label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n                    </div>\n                </form>\n    "
        }), 
        __metadata('design:paramtypes', [ng2_redux_1.NgRedux])
    ], Sample2Component);
    return Sample2Component;
}());
exports.Sample2Component = Sample2Component;
//# sourceMappingURL=sample2.component.js.map