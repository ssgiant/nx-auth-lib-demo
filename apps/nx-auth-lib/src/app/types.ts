export const GET_MESSAGE = 'Get Message';
export const SET_MESSAGE = 'Set Message';

export const APP_STORE_KEY = 'nx-auth-lib';

export interface Message {
    message: string;
}

export interface AppState {
    message: string | null;
}
