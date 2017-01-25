declare var componentHandler: any;

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { select, NgRedux } from 'ng2-redux';

import { IAppState } from '../state-management/store-interfaces';
import { UPDATE_VISITED_ROUTES } from '../state-management/actions';


@Component({
    template: `
                <form action="#">
                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" id="username"/>
                        <label class="mdl-textfield__label" for="username">Username</label>
                    </div>
                </form>
    `
})
export class Sample2Component implements OnInit, AfterViewInit {
     pageTitle: string = "Sample2 Route!";

     constructor(private ngRedux: NgRedux<IAppState>){

     }

     ngOnInit(){
        this.ngRedux.dispatch({ type: UPDATE_VISITED_ROUTES, payload: {route: 'sample2'} });

     }

     ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}