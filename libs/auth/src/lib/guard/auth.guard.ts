import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthFacade } from '../state/auth.facade';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authFacade: AuthFacade) {}
    canActivate() {
        return this.authFacade.isAuthenticated$.pipe(
            tap(isAuthenticated => {
                if (!isAuthenticated) {
                    this.authFacade.doLogout();
                }
            })
        );
    }
}
