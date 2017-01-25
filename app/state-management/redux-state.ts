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
import * as actions from './actions';


export const updateFilterAction = (filterStr: string) : IAction  => ( { type: actions.UPDATE_FILTER, payload: filterStr });
export const updateVisitedRoutesAction = (route: IRoute) : IAction  => ( { type: actions.UPDATE_VISITED_ROUTES, payload: route });


export const actionsCreators = {
    updateFilterAction,
    updateVisitedRoutesAction
};


export const ACTION_HANDLERS = {
  [actions.UPDATE_FILTER]: (state: IAppState, action: IAction) : IAppState => {
     return {
         filterStr: action.payload,
         visitedRoutes: state.visitedRoutes
     }
  },
  [actions.UPDATE_VISITED_ROUTES]: (state: IAppState, action:IAction) : IAppState => {
      return {
          filterStr: state.filterStr,
          visitedRoutes: addRoute(state.visitedRoutes, action.payload)
      }
  }
};


export function appReducer (state: IAppState, action: IAction) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
};



