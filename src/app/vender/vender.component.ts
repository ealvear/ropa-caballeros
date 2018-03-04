import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Formpedido } from '../models/Formpedido';
//services en angular
import { SendEmailService } from '../services/send-email.service';
//libreria rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//material desing de angular
//import {MatSnackBar} from '@angular/material';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
    selector: 'app-vender',
    templateUrl: './vender.component.html',
    styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {
    PedidoModel = new Formpedido();
    private emailResponse;
    private truefalse: boolean = false;

    constructor(private sendServices: SendEmailService) { }

    ngOnInit() {
    }


}