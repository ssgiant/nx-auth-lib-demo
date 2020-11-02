import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthEffects } from '../../../../../libs/auth/src/lib/state/auth.effects';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppFacade } from '../state/app.facade';

@Component({
    selector: 'demo-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, OnDestroy {
    @ViewChild('loginForm', { static: true })
    public loginForm: NgForm;

    loginError = false;

    destroyed = new Subject();
    constructor(private appFacade: AppFacade, private authEffects: AuthEffects) {}

    ngOnInit() {
        this.loginForm.setValue({});
        this.authEffects.loginFailure$.pipe(takeUntil(this.destroyed)).subscribe(() => {
            this.loginError = true;
        });

        this.authEffects.loginSuccess$.pipe(takeUntil(this.destroyed)).subscribe(() => {
            this.loginError = false;
        });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    doLogin(e: Event) {
        e.preventDefault();
        this.loginError = false;
        if (this.loginForm.valid) {
            this.appFacade.doLogin(this.loginForm.value);
        }
    }
}
