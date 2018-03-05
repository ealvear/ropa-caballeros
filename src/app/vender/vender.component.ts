import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Formpedido } from '../models/Formpedido';
//services en angular

import { DataService } from '../services/data.service';
//libreria rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//material desing de angular
//import {MatSnackBar} from '@angular/material';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {Headers,RequestOptions} from '@angular/http';
import { Http } from '@angular/http';

@Component({
    selector: 'app-vender',
    templateUrl: './vender.component.html',
    styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {
    
    private emailResponse;
    private truefalse: boolean = false;
    private fpedido:Formpedido;
    constructor(private dataService: DataService, public http: Http) {
         this.fpedido= new Formpedido("andres","cedula",1,"camisa",3,2000,"23/02/15-2:30","cra4",true);
     }

    ngOnInit() {
    }
    onSubmit(data: any){
       this.dataService.postEmployee(this.fpedido);

    }

    doPOSTWhitHeaders(data: any){
        let headers= new Headers();
        headers.append('Authorization',btoa('username:pasword'));
        let opts =new RequestOptions();
        opts.headers=headers;
        let url = '${this.apiRoot}/get';
        this.http.post(url,data,opts).subscribe(

            res=>console.log(res.json()),
            msg => console.error('Error: ${msg.status} ${msg.statusText}')
        );

    }

}