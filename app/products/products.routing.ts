import { RouterModule } from '@angular/router';

import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductFilterPipe } from '../products/product-filter.pipe';
import { ProductGuardService } from '../products/product-guard.service';

export const productRouting = RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id',
                canActivate: [ ProductGuardService ],  
                component: ProductDetailComponent }
        ]);