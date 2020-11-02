import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { AppActions } from './app.actions';
import { AppService } from '../service/app.service';
import { Message } from '../types';

@Injectable({
    providedIn: 'root'
})
export class AppEffects {
    constructor(private actions: Actions, private appService: AppService) {}

    public getMessage$ = createEffect(() =>
        this.actions.pipe(
            ofType(AppActions.getMessage),
            mergeMap(() => this.appService.getMessage().pipe(map((res: Message) => AppActions.setMessage(res))))
        )
    );
}
