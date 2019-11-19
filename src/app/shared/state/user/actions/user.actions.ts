import { Action } from '@ngrx/store';
import { User } from '../../../models/user.model';

export enum UserActionsTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success',
  SaveUser = '[User] Save User',
  SaveUserSuccess = '[User] Save User Success',
}