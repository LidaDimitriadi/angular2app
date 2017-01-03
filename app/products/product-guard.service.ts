import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

    constructor(private _router: Router){
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let parameter = +route.url[1].path;
        if(isNaN(parameter) || parameter < 1) {
            alert("Please submit valid url.");
            console.log("aborting");
            this._router.navigate(["/products"]);
            return false;
        }
        return true;
    }
}