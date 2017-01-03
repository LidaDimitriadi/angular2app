import { Component, OnInit } from '@angular/core';
import { TestRedux } from '../state-management/redux-state';
import { IRoute } from '../IRoute';

@Component({
    selector: 'visited-routes',
    moduleId: module.id,
    templateUrl: './visited-routes.component.html'
})
export class VisitedRoutesComponent implements OnInit {
    visitedRoutes: IRoute[] = this.getRoutes();

    getRoutes(): IRoute[] {
        console.log("updating routes");
        console.log(this._testRedux.store.getState().visitedRoutes);
        return this._testRedux.store.getState().visitedRoutes;
    }

    constructor(private _testRedux: TestRedux) {
    };

    ngOnInit() {
        console.log(this._testRedux.store.getState());
        this.visitedRoutes = this._testRedux.store.getState().visitedRoutes;
    }
}