import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  base_url: string = "http://mybackend.com/api/";

  // Endpoints
  documentTypes_endpoint = "documentTypes";
  provinces_endpoint = "provinces";
  municipes_endpoint = "municipes";
  languageLevels_endpoint = "languageLevels";
  languageNames_endpoint = "languageNames";
  
  constructor(private httpClient: HttpClient) {}

  // Métodos para obtener los tipos de documento
  getdocumentTypes() {
    return this.httpClient.get<any>(this.base_url + this.documentTypes_endpoint).toPromise();
  }

  async documentTypes(): Promise<any> {
    const documentsType = await this.getdocumentTypes();
    return documentsType;
  }

  // Métodos para obtener los datos de las provincias
  getProvinces() {
    return this.httpClient.get<any>(this.base_url + this.provinces_endpoint).toPromise();
  }

  async provinces(): Promise<any> {
    const provinces = await this.getProvinces();
    return provinces;
  }

  // Métodos para obtener los datos de los municipios
  getMunicipes() {
    return this.httpClient.get<any>(this.base_url + this.municipes_endpoint).toPromise();
  }

  async municipes(): Promise<any> {
    const provinces = await this.getMunicipes();
    return provinces;
  }

  // Métodos para obtener los datos de los niveles de idiomas
  getLanguageLeves() {
    return this.httpClient.get<any>(this.base_url + this.languageLevels_endpoint).toPromise();
  }

  async languageLevels(): Promise<any> {
    const provinces = await this.getLanguageLeves();
    return provinces;
  }

  // Métodos para obtener los datos de los nombres de idiomas
  getLanguageNames() {
    return this.httpClient.get<any>(this.base_url + this.languageNames_endpoint).toPromise();
  }

  async languageNames(): Promise<any> {
    const provinces = await this.getLanguageNames();
    return provinces;
  }  
}