import { Data } from "@angular/router";

export class Formpedido{
    public nombre:string;
    public tipoId:number;
    public id:number;
    public tipoProducto:number;
    public cantidadProductos:number;
    public precioTotal:number;
    public fechayHora:string;
    public dirEntrega:string;
    public estadoPedido:string;
}