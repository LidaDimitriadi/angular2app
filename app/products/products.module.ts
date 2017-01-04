import { NgModule }       from '@angular/core';
import { SharedModule } from '../shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { productRouting } from './products.routing';

@NgModule({
    imports: [
        SharedModule,
        productRouting
    ],
    declarations: [
        ProductDetailComponent,
        ProductListComponent,
        ProductFilterPipe,
        
    ],
    providers: [ 
        ProductGuardService,
        ProductService
     ]
})

export class ProductsModule {

}