import { RouterModule } from '@angular/router';
import { AddProductComponent } from './addProduct.component';

export const AddProductRouting = RouterModule.forChild([
    { path: 'addProduct', component: AddProductComponent }
]);