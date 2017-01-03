import { IAction, IReducer, IAppState } from './store-interfaces';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilterAction = (filterStr: string) : IAction  => ( { type: UPDATE_FILTER, payload: filterStr }) ;
 
