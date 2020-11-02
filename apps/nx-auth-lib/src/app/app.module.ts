import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule, JWTInterceptorService } from '../../../../libs/auth/src';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppService } from './service/app.service';
import { AppReducers } from './state/app.reducers';
import { AppEffects } from './state/app.effect';
import { APP_STORE_KEY } from './types';

@NgModule({
    declarations: [AppComponent, LoginComponent, WelcomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AuthModule,
        StoreModule.forRoot({ [APP_STORE_KEY]: AppReducers }),
        EffectsModule.forRoot([AppEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi: true }, AppService],
    bootstrap: [AppComponent]
})
export class AppModule {}
