import { Injectable } from '@angular/core';
import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import { mergeMap, map, catchError, tap, exhaustMap } from 'rxjs/operators';
import { AuthActions } from './auth.actions';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Credentials, AUTH_TOKEN_KEY, AuthResponseSuccess, AuthResponseFailure } from '../types';

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {
    constructor(private actions: Actions, private authService: AuthService) {}

    public doLogin$ = createEffect(() =>
        this.actions.pipe(
            ofType(AuthActions.Login),
            mergeMap((credentials: Credentials) =>
                this.authService.login(credentials).pipe(
                    tap(() => removeAuthTokenFromLocalStorage()),
                    map((res: AuthResponseSuccess) => AuthActions.LoginSuccess(res)),
                    catchError((err: AuthResponseFailure) => {
                        return of(AuthActions.LoginFailure(err));
                    })
                )
            )
        )
    );

    public loginSuccess$ = this.actions.pipe(
        ofType(AuthActions.LoginSuccess),
        tap(res => setAuthTokenToLocalStorage(res.token))
    );

    public loginFailure$ = this.actions.pipe(
        ofType(AuthActions.LoginFailure),
        tap(res => removeAuthTokenFromLocalStorage())
    );

    public doLogout$ = this.actions.pipe(
        ofType(AuthActions.Logout),
        tap(res => removeAuthTokenFromLocalStorage())
    );
}

export function getAuthTokenFromLocalStorage() {
    return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthTokenToLocalStorage(authToken: string) {
    return localStorage.setItem(AUTH_TOKEN_KEY, authToken);
}

export function removeAuthTokenFromLocalStorage() {
    return localStorage.removeItem(AUTH_TOKEN_KEY);
}
