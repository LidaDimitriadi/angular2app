declare var componentHandler: any;

import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { IProduct, IReview } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { select, NgRedux } from 'ng2-redux';

import { IAppState } from '../state-management/store-interfaces';
import { UPDATE_VISITED_ROUTES } from '../state-management/actions';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css'] 
})
export class ProductDetailComponent implements OnInit, AfterViewChecked {
    pageTitle: string;
    product: IProduct;
    errorMessage: any;
    imageWidth: number = 300;
    imageMargin: number = 10;
    review: IReview;
    reviewErrorMessage: string = "Please enter a review";
    reviewErrorVisibility: boolean = false;

    constructor(private _route: ActivatedRoute, 
                private _service: ProductService,
                private _router: Router,
                private ngRedux: NgRedux<IAppState>) {
                this.review = { content: "" };
    };

    ngOnInit(): void {
         this._router.events.forEach(() => {
            let id = +this._route.snapshot.params['id'];
            this.pageTitle = `Product Details: ${id}`;
            this._service.getProductById(id).subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error
            );
            this.ngRedux.dispatch({ type: UPDATE_VISITED_ROUTES, payload: {route: 'product', id: id} });
        });
    }

    ngAfterViewChecked() {
        componentHandler.upgradeAllRegistered();
    }


    OnBack(): void {
        this._router.navigate(['/products']);
    }

    addReview(): void {
        if(this.review.content != "") {
            if(this.reviewErrorVisibility){
                this.reviewErrorVisibility = !this.reviewErrorVisibility;
            }
            this._service.updateProduct(this.product.id, this.review)
            .subscribe(
                () => {
                    this._service.getProductById(this.product.id).subscribe(
                        product => this.product = product,
                        error => this.errorMessage = <any>error
                    ); 
                    this.review = { content: "" };
                }
            );
        }
       else {
           this.reviewErrorVisibility = !this.reviewErrorVisibility;
       } 
           
    }
}

