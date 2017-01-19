import { Injectable } from '@angular/core';
import { IProduct, IReview } from './product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private productUrl = "http://localhost:16281/api/products";

    public headers:Headers; 
    public options:RequestOptions;

    constructor(private _http: Http) { 
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({headers: this.headers});   
    };

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All Products: ' + JSON.stringify(data)))
            .catch(this.handleError);
    };

    getProductById(id: number): Observable<IProduct> {
        return this._http.get(`${this.productUrl}/${id}`)
                .map((response: Response) => <IProduct> response.json())
                .do(data => console.log('product: ' + JSON.stringify(data)))
                .catch(this.handleError);
       
    };

    addNewProduct(product: IProduct): Observable<string> {
        return this._http.post(this.productUrl + "/addNewProduct", product)
                 .map((response: Response) => response.json() ? "all ok" : "problem occured")
                 .do(data => console.log('did post? ' + data))
                 .catch(this.handleError);
    };

    updateProduct(id: number, review: IReview):  Observable<string> {
        return this._http.put(`${this.productUrl}/${id}`, review)
                   .map((response: Response) => response.json() ? "all ok" : "problem occured")
                   .do(data => console.log('did post? ' + data))
                   .catch(this.handleError);
    };

    removeProduct(id: number): Observable<string> {
        return this._http.delete(`${this.productUrl}/${id}`)
                   .map((response: Response) => response.json() ? "all ok" : "problem occured")
                   .do(data => console.log('did delete? ' + data))
                   .catch(this.handleError);
    };

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    };

}