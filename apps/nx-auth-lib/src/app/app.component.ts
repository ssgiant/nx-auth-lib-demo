import { Component, OnDestroy } from '@angular/core';
import { AuthEffects } from '../../../../libs/auth/src/lib/state/auth.effects';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'demo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnDestroy {
    title = 'nx-auth-lib';

    destroyed = new Subject<void>();

    constructor(private authEffects: AuthEffects, private router: Router) {
        this.authEffects.doLogout$.pipe(takeUntil(this.destroyed)).subscribe(() => {
            this.router.navigate(['login']);
        });
        this.authEffects.loginSuccess$.pipe(takeUntil(this.destroyed)).subscribe(() => {
            this.router.navigate(['app']);
        });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
}
