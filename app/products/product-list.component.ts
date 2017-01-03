import { Component, OnInit,OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { VisitedRoutes } from '../visited-routes.service';
import { TestRedux } from '../state-management/redux-state';


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
    filterStr: string = this._testRedux.store.getState().filterStr;
    products: IProduct[]; 
    errorMessage: any;

    constructor(private _productService: ProductService, 
                private _testRedux: TestRedux) {
    };
   
    toggleImage(): void {
        this.showImages = !this.showImages;
    };  

    ngOnInit(){

        this._productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error,
            () => console.log("completed http request!!")
        );

        this._testRedux.dispatchAddRouteAction({route: 'products', id: 0});
    }

    ngOnDestroy(){
        this._testRedux.dispatchFilterAction(this.filterStr);
    }

    ratingClickHandler(event: string): void {
        console.log(event);
    }
}