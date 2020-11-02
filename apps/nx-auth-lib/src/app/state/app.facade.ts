import { AppState, APP_STORE_KEY } from '../types';
import { Injectable } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import { AppActions } from './app.actions';
import { Credentials, AuthActions } from '../../../../../libs/auth/src';

export const getAppState = state => state[APP_STORE_KEY];

@Injectable({
    providedIn: 'root'
})
export class AppFacade {
    constructor(private store: Store) {}

    getMessage$ = this.store.select(createSelector(getAppState, (appState: AppState) => appState.message));

    loadMessage() {
        this.store.dispatch(AppActions.getMessage());
    }

    doLogin(credentials: Credentials) {
        this.store.dispatch(AuthActions.Login(credentials));
    }

    doLogout() {
        this.store.dispatch(AuthActions.Logout());
    }
}
