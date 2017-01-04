import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
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
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Details';
    product: IProduct;
    errorMessage: any;
    imageWidth: number = 300;
    imageMargin: number = 10;
    constructor(private _route: ActivatedRoute, 
                private _service: ProductService,
                private _router: Router,
                private ngRedux: NgRedux<IAppState>){
    };

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this._service.getProductById(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error
        );
        this.ngRedux.dispatch({ type: UPDATE_VISITED_ROUTES, payload: {route: 'product', id: id} });
    }


    OnBack(): void {
        this._router.navigate(['/products']);
    }
}