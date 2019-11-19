import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import { User, Credentials } from '../models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(AppSettings.API_ENDPOINT_USERS);
  }

  /*async login({ email, password }): Promise<any> {
    const users = await this.getUsers();
    // Mock response from backend:
    return users.find(
      (user: any) => user.email === email && user.password === password
    );
  }*/

  login({ email, password }: Credentials): Observable<User> {
    const users = this.getUsers();
    return users.pipe(filter(function(user){
      return user.email === email && user.password === password;
    }));
  }
}