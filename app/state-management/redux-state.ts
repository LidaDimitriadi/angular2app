import {
  Action,
  Reducer,
  Store,
  createStore
} from 'redux';

import { IAction, IReducer, IAppState } from './store-interfaces';
import { IRoute } from '../IRoute';
import { Injectable } from '@angular/core';
import { addRoute } from '../helpers/handlingView';

export const UPDATE_FILTER: string = 'UPDATE_FILTER';
export const UPDATE_VISITED_ROUTES: string = 'UPDATE_VISITED_ROUTES';

export const updateFilterAction = (filterStr: string) : IAction  => ( { type: UPDATE_FILTER, payload: filterStr });
export const updateVisitedRoutesAction = (route: IRoute) : IAction  => ( { type: UPDATE_VISITED_ROUTES, payload: route });

 

export const actions = {
    updateFilterAction,
    updateVisitedRoutesAction
};


export const ACTION_HANDLERS = {
  [UPDATE_FILTER]: (state: IAppState, action: IAction) : IAppState => {
     return {
         filterStr: action.payload,
         visitedRoutes: state.visitedRoutes
     }
  },
  [UPDATE_VISITED_ROUTES]: (state: IAppState, action:IAction) : IAppState => {
      return {
          filterStr: state.filterStr,
          visitedRoutes: addRoute(state.visitedRoutes, action.payload)
      }
  }
};

export const initialState: IAppState = {
    filterStr: "",
    visitedRoutes: []
};

export function appReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
};

 


@Injectable()
export class TestRedux {
    store: Store<IAppState> = createStore<IAppState>(appReducer);

    dispatchFilterAction = (testStr: string): void  => {
       this.store.dispatch(updateFilterAction(testStr));
    }

    dispatchAddRouteAction = (route: IRoute): void => {
        this.store.dispatch(updateVisitedRoutesAction(route));
    }

}






