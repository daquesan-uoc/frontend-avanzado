import { createAction, props } from '@ngrx/store';
import { User, Credentials } from 'src/app/shared/models/user.model';

export const login = createAction(
  '[Auth] Login',
  props<{ credentials: Credentials }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');
export const logoutConfirmation = createAction('[Auth] Logout Confirmation');
export const logoutConfirmationDismiss = createAction(
  '[Auth] Logout Confirmation Dismiss'
);

export const loginRedirect = createAction('[Auth] Login Redirect');