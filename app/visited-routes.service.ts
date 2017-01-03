import { Injectable } from '@angular/core';
import { IRoute } from './IRoute';

@Injectable()
export class VisitedRoutes {
    Routes: IRoute[] = [];

    addRoute(route: string, id: number): void { 
        var index = -1; 
        this.Routes.forEach( (x) => {
           if(x.id == id && x.route == route) {
               index = this.Routes.indexOf(x);
           } 
        });
        if(index == -1) {

            if(this.Routes.length == 3 ){
                this.Routes.shift();
            }
            this.Routes.push({ route, id });
        }
    }
    
    getRouteByString(route: string): IRoute{
        var Route;
        this.Routes.forEach( (x) => {
           if(x.route == route) {
               Route = x;
           } 
        });
        return Route;
    }
}