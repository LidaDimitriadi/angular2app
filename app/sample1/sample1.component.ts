import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';

import { IAppState } from '../state-management/store-interfaces';
import { UPDATE_VISITED_ROUTES } from '../state-management/actions';

@Component({
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                {{ pageTitle }}
            </div>
        </div>
    `
})
export class Sample1Component implements OnInit {
     pageTitle: string = "Sample1 Route!";

     constructor(private ngRedux: NgRedux<IAppState>) {

     }

     ngOnInit() {
         this.ngRedux.dispatch({ type: UPDATE_VISITED_ROUTES, payload: {route: 'sample1'} });

     }
}