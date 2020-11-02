import { createReducer, on, Action } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { getAuthTokenFromLocalStorage } from './auth.effects';
import { AuthState } from '../types';

const initialState: AuthState = {
    isAuthenticated: getAuthTokenFromLocalStorage() ? true : false,
    authToken: getAuthTokenFromLocalStorage() ? getAuthTokenFromLocalStorage() : null,
    errMessage: null
};

const authReducer = createReducer(
    initialState,
    on(AuthActions.LoginSuccess, (state, { token }) => ({
        ...state,
        isAuthenticated: true,
        authToken: token,
        errMessage: null
    })),
    on(AuthActions.LoginFailure, (state, { errMessage }) => ({
        ...state,
        isAuthenticated: false,
        authToken: null,
        errMessage
    })),
    on(AuthActions.Logout, (state, {}) => ({
        ...state,
        isAuthenticated: false,
        authToken: null,
        errMessage: null
    }))
);

export function AuthReducer(state: AuthState, action: Action) {
    return authReducer(state, action);
}
