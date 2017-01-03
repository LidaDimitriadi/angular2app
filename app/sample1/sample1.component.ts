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
export class Sample1Component implements OnInit {
     pageTitle: string = "Sample1 Route!";

     constructor(private _visitedRoutesService: VisitedRoutes){

     }

     ngOnInit(){
         this._visitedRoutesService.addRoute('sample1', 0);
     }
}