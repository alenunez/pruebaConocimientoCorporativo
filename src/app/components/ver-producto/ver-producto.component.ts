import { Producto } from './../../models/producto';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
 public  producto: Producto=new Producto()
  prod:any;
  imagen:any;

  constructor( private api: ProductServiceService) { }

  ngOnInit(): void {
   /**  this.producto.nombre="";
    this.producto.caracteristicas="";
    this.producto.fechaLanzamiento=new Date();
    this.producto.nombre="";
    this.producto.correoFabricante="";
    this.producto.paisFabricacion="";
    this.producto.precio=0;
    this.producto.unidadesDisponibles=0;
    this.producto.unidadesVendidas=0;
    this.producto.imagen="";*/







    this.verProducto();
    
  }
  verProducto(){
    this.api.getProducto().subscribe(data=>{
      this.prod=data;
      this.producto=this.prod;
      this.imagen=this.producto.imagen;
      if(!this.producto.imagen){
        this.producto.imagen=""
      }
    })
  }

  cerrar(){
    location.href="listaProductos"
  }
  actualizarProducto(){}

}
