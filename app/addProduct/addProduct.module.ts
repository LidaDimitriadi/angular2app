import { NgModule } from '@angular/core';
import { AddProductComponent } from './addProduct.component';
import { AddProductRouting } from './addProduct.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../products/product.service';


@NgModule({
    imports: [
        AddProductRouting,
        ReactiveFormsModule
    ],
    declarations: [
        AddProductComponent
    ],
    providers: [
        ProductService
    ]
})

export class AddProductModule {};