import {Action} from '@ngrx/store';

import { User } from '../../../models/user.model';
import { UserActions } from '..';

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: null
}
/*
export default function (state = initialState, action: Action): UserState {
  switch (action.type) {
      case UserActions.GET__SUCCESS: {
          return action.payload;
      }
      default: {
          return state;
      }
  }
}*/