import { AppState } from '../types';
import { AppActions } from './app.actions';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: AppState = {
    message: null
};

const appReducer = createReducer(
    initialState,
    on(AppActions.setMessage, (state, { message }) => ({
        ...state,
        message
    }))
);

export function AppReducers(state: AppState, action: Action) {
    return appReducer(state, action);
}
