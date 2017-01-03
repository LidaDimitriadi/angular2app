import { IRoute } from '../IRoute';

export interface IAction {
    type: string;
    payload?: any;
} 

export interface IReducer<T> {
    (state: T, action: IAction): T;
}

export interface IAppState {
    filterStr: string;
    visitedRoutes: IRoute[];
}