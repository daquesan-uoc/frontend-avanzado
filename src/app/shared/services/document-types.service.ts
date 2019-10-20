import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypesService {
  base_url: string = "http://mybackend.com/api/";
  tasks_endpoint = "documentsType";
  
  constructor(private httpClient: HttpClient) {}

  getdocumentTypes() {
    return this.httpClient.get<any>(this.base_url + this.tasks_endpoint).toPromise();
  }

  async documentTypes(): Promise<any> {
    const documentsType = await this.getdocumentTypes();
    return documentsType;
  }
}