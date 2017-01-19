import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';

import { IAppState } from '../state-management/store-interfaces';
import { IProduct } from '../products/product';
import { UPDATE_VISITED_ROUTES } from '../state-management/actions';
import { ProductService } from '../products/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'addProduct.component.html'
})
export class AddProductComponent implements OnInit {
     pageTitle: string = "Add new Product";
     product: any;
     logMessage: string;

     constructor(private ngRedux: NgRedux<IAppState>, 
                 private _productService: ProductService,
                 private _builder: FormBuilder ) {

     }

     ngOnInit() {
         this.ngRedux.dispatch({ type: UPDATE_VISITED_ROUTES, payload: {route: 'addProduct'} });
         this.product = this._builder.group({
            name: "",
            code: "",
            releaseDate: "",
            description: "",
            price: "",
            rating: "",
            imgUrl: "",
        });
     }

     addProduct(product: IProduct) {
         this._productService.addNewProduct(product)
            .subscribe(response => this.logMessage = response);
     }
}