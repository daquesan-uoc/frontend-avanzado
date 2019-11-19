import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '.';
import { User } from '../../models/user.model';

export interface AuthState {
  user: User;
  error: boolean;
}

export const initialState: AuthState = {
  user: null,
  error: false,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({
    ...state,
    error: false
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ 
    ...state, 
    user,
    error: false
   })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    error: true
  }))
);

//export const getUser = (state: AuthState) => state.user;
//export const getError = (state: AuthState) => state.error;
//export const getPending = (state: State) => state.pending;