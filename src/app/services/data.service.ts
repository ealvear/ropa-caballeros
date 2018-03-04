import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Formpedido } from '../models/Formpedido';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  apiAddress: string;
  constructor(private _http: HttpClient) {
    this.apiAddress = 'http://localhost:9080//RestJR/services/alveares/validarPedido';

  }

  getData(): Observable<Array<Formpedido>> {
    return this._http.get<Array<Formpedido>>(this.apiAddress);
  }



}