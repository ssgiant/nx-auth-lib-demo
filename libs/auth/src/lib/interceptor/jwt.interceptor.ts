import { Location } from '@angular/common';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, mergeMap } from 'rxjs/operators';
import { AuthFacade } from '../state/auth.facade';

@Injectable()
export class JWTInterceptorService implements HttpInterceptor {
    constructor(private authFacade: AuthFacade, private router: Router, private location: Location) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authFacade.getAuthToken$.pipe(
            tap(authToken => {
                if (authToken) {
                    request = request.clone({
                        headers: request.headers.set('Authorization', 'Bearer ' + authToken)
                    });
                }
            }),
            mergeMap(() =>
                next.handle(request).pipe(
                    catchError((error: HttpErrorResponse) => {
                        if (error.status === 401) {
                            this.authFacade.doLogout();
                        }
                        return throwError(error);
                    })
                )
            )
        );
    }
}
