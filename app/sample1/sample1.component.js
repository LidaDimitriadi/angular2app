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
var visited_routes_service_1 = require('../visited-routes.service');
var Sample1Component = (function () {
    function Sample1Component(_visitedRoutesService) {
        this._visitedRoutesService = _visitedRoutesService;
        this.pageTitle = "Sample1 Route!";
    }
    Sample1Component.prototype.ngOnInit = function () {
        this._visitedRoutesService.addRoute('sample1', 0);
    };
    Sample1Component = __decorate([
        core_1.Component({
            template: "\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n                {{ pageTitle }}\n            </div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [visited_routes_service_1.VisitedRoutes])
    ], Sample1Component);
    return Sample1Component;
}());
exports.Sample1Component = Sample1Component;
//# sourceMappingURL=sample1.component.js.map