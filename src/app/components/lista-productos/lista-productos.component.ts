import { Producto } from './../../models/producto';
import { Component, OnInit, NgModule } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination'; // At the top of your module


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
  })
  

export class ListaProductosComponent implements OnInit {
  productos: any = [];
  producto: Producto = new Producto();
  filterPost='';
  filterPostPais='';
  mostrarOp:boolean=false;
  mostrarBuscadorNombre:boolean=false;
  mostrarBuscadorPais:boolean=false;
  buscador:any;



  public page :number=0;

  constructor(private api: ProductServiceService) { }

  ngOnInit(): void {
    this.getProductos();

  }
  getProductos() {
    this.api.getProductos().subscribe(data => {
      this.productos = data;
    })
  }

  verProducto(arg: any) {
    this.producto = arg;
    location.href = "verProducto"
    sessionStorage.setItem('idProducto', JSON.stringify(this.producto.id))
  }

  eliminar(arg: any): void {
    this.producto = arg;
    sessionStorage.setItem('idProducto', JSON.stringify(this.producto.id))
    this.api.eliminarProducto().subscribe();
    alert("producto eliminado exitosamente.");
    location.href = "/listaProductos"
  }
  mostrar(){
    this.mostrarOp=true;
    console.log(this.mostrarOp)
  }
  mostrarPais(){
    this.mostrarBuscadorNombre=false;
    this.mostrarBuscadorPais=true;
  }
  onChange(){}




}
