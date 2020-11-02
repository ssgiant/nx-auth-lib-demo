import { createAction, props } from '@ngrx/store';
import {
    DO_LOGIN,
    Credentials,
    LOGIN_SUCCESS,
    AuthResponseSuccess,
    LOGIN_FAILURE,
    AuthResponseFailure,
    DO_LOGOUT
} from '../types';

const Login = createAction(DO_LOGIN, props<Credentials>());
const LoginSuccess = createAction(LOGIN_SUCCESS, props<AuthResponseSuccess>());
const LoginFailure = createAction(LOGIN_FAILURE, props<AuthResponseFailure>());
const Logout = createAction(DO_LOGOUT);
export const AuthActions = {
    Login,
    LoginSuccess,
    LoginFailure,
    Logout
};
