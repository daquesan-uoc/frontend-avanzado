import {Injectable} from '@angular/core';

import { Action } from '@ngrx/store';
import { User } from '../../../models/user.model';

export enum UserActionsTypes {
  SaveUser = '[User] Save User',
  SaveUserSuccess = '[User] Save User Success',
}

@Injectable()
export class UserActions {
  static SAVE_USER = '[User] Save User';
  saveUser(user): Action {
      return {
          type: UserActions.SAVE_USER,
          payload: user
      };
  }

  static SAVE_USER_SUCCESS = '[User] Save User Success';
  saveUserSuccess(user): Action {
      return {
          type: UserActions.SAVE_USER_SUCCESS,
          payload: user
      };
  }
}