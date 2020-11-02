import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from '../../../../libs/auth/src';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'app', canActivate: [AuthGuard], component: WelcomeComponent },
    { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
