import { Component, OnInit,OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { select, NgRedux } from 'ng2-redux';
import { UPDATE_FILTER, UPDATE_VISITED_ROUTES } from '../state-management/actions';
import { IAppState } from '../state-management/store-interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Component({
   moduleId: module.id,
   templateUrl: 'product-list.component.html',
   styleUrls: ['product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 5;
    showImages: boolean = false;
    filterStr: string = this.ngRedux.getState().filterStr;
    products: IProduct[]; 
    errorMessage: any;

    constructor(private _productService: ProductService, 
                private ngRedux: NgRedux<IAppState>) {
    };
   
    toggleImage(): void {
        this.showImages = !this.showImages;
    };  

    ngOnInit(){

        this._productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error,
            () => console.log(this.products)
        );
        this.ngRedux.dispatch({ type: UPDATE_VISITED_ROUTES, payload: { route: 'products' } });
    }

    ngOnDestroy() {
        this.ngRedux.dispatch({ type: UPDATE_FILTER, payload: this.filterStr });
    }

    ratingClickHandler(event: string): void {
        console.log(event);
    }

    removeItem(id: number) {
        this._productService.removeProduct(id).subscribe(
            () => {
                 this._productService.getProducts().subscribe(
                 products => this.products = products,
                 error => this.errorMessage = <any>error
             );
            }
        );
    }


}