import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { TestRedux } from '../state-management/redux-state';
@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css'] 
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Details';
    product: IProduct;
    errorMessage: any;
    imageWidth: number = 300;
    imageMargin: number = 10;
    constructor(private _route: ActivatedRoute, 
                private _service: ProductService,
                private _router: Router,
                private _testRedux: TestRedux){
    };

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this._service.getProductById(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error
        );
       
    }

    ngOnDestroy(){
        this._testRedux.dispatchAddRouteAction({route: 'product', id: +this._route.snapshot.params['id']});
    }

    OnBack(): void {
        this._router.navigate(['/products']);
    }
}