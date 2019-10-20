import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
  base_url: string = "http://mybackend.com/api/";
  tasks_endpoint = "provinces";
  
  constructor(private httpClient: HttpClient) {}

  getProvinces() {
    return this.httpClient.get<any>(this.base_url + this.tasks_endpoint).toPromise();
  }

  async provinces(): Promise<any> {
    const provinces = await this.getProvinces();
    return provinces;
  }
}