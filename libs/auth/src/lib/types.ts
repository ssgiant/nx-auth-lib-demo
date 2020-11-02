export const DO_LOGIN = 'Do Login';
export const LOGIN_SUCCESS = 'Login Success';
export const LOGIN_FAILURE = 'Login Failure';
export const DO_LOGOUT = 'Do Logout';

export interface Credentials {
    username: string;
    password: string;
}

export interface AuthResponseSuccess {
    token: string;
}

export interface AuthResponseFailure {
    errMessage: string;
}

export const AUTH_TOKEN_KEY = 'auth_token';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
    isAuthenticated: boolean;
    authToken: string | null;
    errMessage: string | null;
}
