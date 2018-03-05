import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { Formpedido } from './models/FormPedido';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data$: Observable<Array<Formpedido>>;
  title = 'app';
  name: string = '';
  age: number;
  found: boolean;

  constructor(private httpClient: HttpClient, private _svc: DataService) { }
  onNameKeyUp(event: any) {
    this.name = event.target.value;
    this.found = false;
  }


  postProfile() {
    this.httpClient.post(`http://localhost:9080/RestJR/services/alveares/validarPedido`,
      // this.httpClient.post(`/comprobantes-electronicos-ws/RestJR/services/alveares/validarPedido`,
      //PONERLO EN  package.json -> "start": "ng serve --proxy-config proxy.conf.json",
      {
        nombre: "Andres",
        tipoId: "cedula",
        id: 1063811690,
        tipoProductos: "camisas",
        cantidadProductos: 5,
        precioTotal: 2000,
        fechayHora: "21-03-2018",
        dirEntrega: "cra 27",

      })
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      )
  }

}
