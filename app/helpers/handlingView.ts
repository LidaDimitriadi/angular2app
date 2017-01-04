import { IRoute } from '../IRoute';

export const addRoute = (routes: IRoute[], route: IRoute): IRoute[] => { 
    console.log("in add route");
        var index = -1; 
        routes.forEach( (x) => {
           if(x.id == route.id && x.route == route.route) {
               index = routes.indexOf(x);
           } 
        });
        console.log(index);
        if(index == -1) {

            if(routes.length == 3 ){
                console.log('length == 3');
                return (routes.slice(1, routes.length)).concat(route);
            }
            return routes.concat(route);
        }
        console.log(routes);
        return routes;
    }