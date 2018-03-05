import { Data } from "@angular/router";

export class Formpedido{
    public nombre:string;
    public tipoId:string;
    public id:number;
    public tipoProductos:string;
    public cantidadProductos:number;
    public precioTotal:number;
    public fechayHora:string;
    public dirEntrega:string;
    public estadoPedido:boolean;
    
        constructor(nombre:string,tipoId:string, id:number,tipoProductos:string ,cantidadProducto:number, precioTotal:number, fechaHora:string , dirEntrega:string,estadoPedido:boolean  ){
            this.nombre=nombre;
            this.tipoId=tipoId;
            this.id=id;
            this.tipoProductos=tipoProductos;
            this.cantidadProductos=cantidadProducto;
            this.precioTotal=precioTotal;
            this.fechayHora=fechaHora;
            this.dirEntrega=dirEntrega;
            this.estadoPedido=estadoPedido;
        }
}