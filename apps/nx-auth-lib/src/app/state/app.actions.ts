import { createAction, props } from '@ngrx/store';
import { GET_MESSAGE, SET_MESSAGE, Message } from '../types';

const getMessage = createAction(GET_MESSAGE);
const setMessage = createAction(SET_MESSAGE, props<Message>());
export const AppActions = {
    getMessage,
    setMessage
};
