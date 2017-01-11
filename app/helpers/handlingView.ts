import { IRoute } from '../IRoute';

export const addRoute = (routes: IRoute[], route: IRoute): IRoute[] => { 
        var index = -1; 
        routes.forEach( (x) => {
           if(x.id == route.id && x.route == route.route) {
               index = routes.indexOf(x);
           } 
        });
        console.log(index);
        if(index == -1) {

            if(routes.length == 12 ){
                return (routes.slice(1, routes.length)).concat(route);
            }
            return routes.concat(route);
        }
        return routes;
    }