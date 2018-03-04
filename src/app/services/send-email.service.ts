import { Injectable } from '@angular/core';
import { Formpedido } from '../models/Formpedido';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';




@Injectable()
export class SendEmailService {
  type: any;
  constructor(private http: HttpClient) { }
  getResponseEmail(_body: Formpedido): Observable<any> {
    // this.http.post('/send.php',_body).subscribe(data =>{
    //   console.log(data);
    //   this.type = JSON.stringify(data);
    // });
    return this.http.post('/send.php', _body);
  }

}
