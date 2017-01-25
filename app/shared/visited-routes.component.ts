import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Router } from '@angular/router';
import { IRoute } from '../IRoute';
import { IAppState } from '../state-management/store-interfaces';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'visited-routes',
    moduleId: module.id,
    styleUrls: ['./visited-routes.component.css'],
    templateUrl: './visited-routes.component.html'
})
export class VisitedRoutesComponent {
    @select() visitedRoutes: any;

    constructor(private _router: Router) {

    };

    OnRouteClick(route: IRoute) {
        if(route.id) {
            this._router.navigate([`/${route.route}/${route.id}`]);
        }
        else {
            this._router.navigate([`/${route.route}`]);
        }
        
    }

}