import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipesService {
  base_url: string = "http://mybackend.com/api/";
  tasks_endpoint = "municipes";
  
  constructor(private httpClient: HttpClient) {}

  getMunicipes() {
    return this.httpClient.get<any>(this.base_url + this.tasks_endpoint).toPromise();
  }

  async municipes(): Promise<any> {
    const provinces = await this.getMunicipes();
    return provinces;
  }
}