import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
/* import { UserOptions } from '../models/user'; */
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
/* import { AppStore } from '../states/store.inteface';
import { Store } from '@ngrx/store';
import * as UserActions from 'app/shared/states/user/actions';*/
import { User } from '../models/user.model';

@Injectable()
export class ProfileService {
  // Redefino la variable privada para almacenar el usuario conectado
  private mockUser: User = {} as User;

  // Creo las propiedades para guardar y recuperar el usuario conectado
  set user(user) {
    this.mockUser = user;
  }
  get user() {
    return this.mockUser;
  }

  constructor(
    private http: HttpClient /* , private store$: Store<AppStore> */
  ) {}

  loadProfile(): Observable<any /* UserOptions */> {
    return of(this.mockUser as any);
    //return this.http.get<UserOptions>(AppSettings.API_ENDPOINT_USER_ME);
  }
  logout(): void {
    /*  this.store$.dispatch(new UserActions.Logout()); */
  }
  public updateProfile(profile: User): Observable<User> {
    /*if (Math.random() > 0.5) {
      return this.http.put<TokenResponse>(AppSettings.API_ENDPOINT_USER_ME, profile);
    }*/
    this.mockUser = { ...profile };
    return of(this.mockUser as User);
  }
  public signupProfile(profile: any /* UserOptions */): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_CREATE,
      profile
    );
  }
  public requestRememberPassword(uid: { uid: string }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD,
      uid
    );
  }
  public rememberPassword(uidAndHash: {
    uid: string;
    hash: string;
  }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD,
      uidAndHash
    );
  }
  public confirmUser(uidAndHash: {
    uid: string;
    hash: string;
  }): Observable<boolean> {
    return this.http.post<boolean>(
      AppSettings.API_ENDPOINT_CONFIRM_USER,
      uidAndHash
    );
  }
}
