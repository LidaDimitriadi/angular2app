"use strict";
var router_1 = require('@angular/router');
var product_list_component_1 = require('../products/product-list.component');
var product_detail_component_1 = require('../products/product-detail.component');
var product_guard_service_1 = require('../products/product-guard.service');
exports.productRouting = router_1.RouterModule.forChild([
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product/:id',
        canActivate: [product_guard_service_1.ProductGuardService],
        component: product_detail_component_1.ProductDetailComponent }
]);
//# sourceMappingURL=products.routing.js.map