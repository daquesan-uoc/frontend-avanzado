import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  base_url: string = "http://mybackend.com/api/";
  tasks_endpoint = "users";
  
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<any>(this.base_url + this.tasks_endpoint).toPromise();
  }

  async login({ email, password }): Promise<any> {
    const users = await this.getUsers();
    return users.find((user: any) => user.email === email && user.password === password);
  }
}