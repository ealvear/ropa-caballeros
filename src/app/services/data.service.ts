import { Injectable } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Formpedido } from '../models/Formpedido';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  apiAddress: string;
  
  constructor(public http: Http) {
    this.apiAddress = 'http://localhost:9080/RestJR/services/alveares/validarPedido';

  }

  getData()  {
    return this.http.get(this.apiAddress).subscribe(res=>res.json());
  }
postEmployee(model:any){
return this.http.post(this.apiAddress,{nombre: "Andres",
tipoId: "cedula",
id: 1063811690,
tipoProductos: "camisas",
cantidadProductos: 5,
precioTotal: 2000,
fechayHora: "21-03-2018",
dirEntrega: "cra 27",
estadoPedido: true}).subscribe(res=> console.log (res.json()));  
}

}