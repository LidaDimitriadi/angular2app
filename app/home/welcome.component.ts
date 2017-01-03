import { Component, OnInit } from '@angular/core';
import { VisitedRoutes } from '../visited-routes.service';

@Component({
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                {{ pageTitle }}
            </div>
        </div>
    `
})
export class WelcomeComponent implements OnInit {
    pageTitle: string = "Welcome!";

    constructor(private _visitedRoutesService: VisitedRoutes){

    }

    ngOnInit(){
        this._visitedRoutesService.addRoute('welcome', 0);
    }
}