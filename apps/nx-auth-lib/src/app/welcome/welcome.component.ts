import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AppEffects } from '../state/app.effect';
import { takeUntil } from 'rxjs/operators';
import { AppFacade } from '../state/app.facade';

@Component({
    selector: 'demo-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent {
    message: string = null;
    destroyed = new Subject();
    constructor(private appFacade: AppFacade) {
        appFacade.loadMessage();
    }

    ngOnInit() {
        this.appFacade.getMessage$.pipe(takeUntil(this.destroyed)).subscribe(message => {
            this.message = message;
        });
    }

    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    doLogout() {
        this.appFacade.doLogout();
    }
}
