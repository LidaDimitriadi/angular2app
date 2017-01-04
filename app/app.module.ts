import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { Routing, AppRoutingProviders } from './app.routing';;
import { ProductsModule } from './products/products.module'; 
import { Sample1Module } from './sample1/sample1.module';
import { Sample2Module } from './sample2/sample2.module';
import { Sample3Module } from './sample3/sample3.module';


import { AppComponent }     from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { VisitedRoutesComponent } from './shared/visited-routes.component';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { appReducer } from './state-management/redux-state';
import { IAppState } from './state-management/store-interfaces';
import { IRoute } from './IRoute';


const initialState: IAppState = {
  filterStr: "",
  visitedRoutes: []
};


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ProductsModule,
    Sample1Module,
    Sample2Module,
    Sample3Module,
    Routing,
    NgReduxModule
    
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    VisitedRoutesComponent
    
  ],
  bootstrap:  [ AppComponent ],
  providers: [ 
    AppRoutingProviders,
    NgRedux
    ]
})


export class AppModule { 
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(appReducer, initialState);
  }
}
