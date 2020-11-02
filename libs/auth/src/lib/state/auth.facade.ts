import { createFeatureSelector, createSelector, State, Store } from '@ngrx/store';
import { AuthState, AUTH_FEATURE_KEY } from '../types';
import { Injectable } from '@angular/core';
import { AuthActions } from './auth.actions';

export const getAuthFeatureState = state => state[AUTH_FEATURE_KEY];

@Injectable({
    providedIn: 'root'
})
export class AuthFacade {
    constructor(private store: Store) {}

    isAuthenticated$ = this.store.select(
        createSelector(getAuthFeatureState, (authState: AuthState) => authState.isAuthenticated)
    );

    getAuthToken$ = this.store.select(
        createSelector(getAuthFeatureState, (authState: AuthState) => authState.authToken)
    );

    getAuthError$ = this.store.select(
        createSelector(getAuthFeatureState, (authState: AuthState) => authState.errMessage)
    );

    doLogout() {
        this.store.dispatch(AuthActions.Logout());
    }
}
