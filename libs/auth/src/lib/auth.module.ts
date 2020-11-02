import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthReducer } from './state/auth.reducers';
import { AUTH_FEATURE_KEY } from './types';
import { AuthEffects } from './state/auth.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(AUTH_FEATURE_KEY, AuthReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    providers: []
})
export class AuthModule {}
