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
var sample1_component_1 = require('./sample1.component');
var sample1_routing_1 = require('./sample1.routing');
var Sample1Module = (function () {
    function Sample1Module() {
    }
    Sample1Module = __decorate([
        core_1.NgModule({
            imports: [
                sample1_routing_1.AddProductRouting
            ],
            declarations: [
                sample1_component_1.AddProductComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Sample1Module);
    return Sample1Module;
}());
exports.Sample1Module = Sample1Module;
;
//# sourceMappingURL=sample1.module.js.map