import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
  selector: 'pm-app',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-md-12">
      <h1>{{ pageTitle }}</h1>
    </div>  
  </div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <a class="navbar-brand">{{ pageTitle }}</a>
        <ul class="nav navbar-nav">
          <li><a [routerLink]="['/welcome']">Home</a></li>
          <li><a [routerLink]="['/products']">Product List</a></li>
          <li><a [routerLink]="['/addProduct']">Add new Product</a></li>
          <li><a [routerLink]="['/sample2']">Sample Route 2</a></li>
          <li><a [routerLink]="['/sample3']">Sample Route 3</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <visited-routes></visited-routes>
      </div>
      <div class="row">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
  `,
  providers: [ ProductService ] 
  })
export class AppComponent {
  pageTitle: string = 'Product Management';
}
