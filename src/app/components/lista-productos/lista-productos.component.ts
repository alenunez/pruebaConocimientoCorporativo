import { Producto } from './../../models/producto';
import { Component, OnInit, NgModule } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

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
  botonNombre:boolean=false;
  botonPais:boolean=false;
    mostrarBuscadorNombre:boolean=false;
  mostrarBuscadorPais:boolean=false;
  mostrar:boolean=true;
  reverse = true;
  seleccionado:any  
  seleccionado2:any  







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

  mostrarPais(){
    this.mostrarBuscadorNombre=false;
    this.mostrarBuscadorPais=true;
  }
  mostrarFiltros():void{
    alert("Funcional");
    this.botonNombre=true;
    this.botonPais=true;
    this.mostrar=false;

  }
  mostrarBuscadorNomb():void{
    this.mostrarBuscadorNombre=true;
    this.mostrarBuscadorPais=false;
  }

  mostrarBuscadorPa(){
    this.mostrarBuscadorNombre=false;
    this.mostrarBuscadorPais=true;
  }

  sortData() {
    if(this.reverse) {
      let newArray = this.productos.sort((a:any,b:any)=> b.id - a.id)
      this.reverse = !this.reverse;
    }
    else if(!this.reverse){
      let newArray = this.productos.sort((a:any,b:any)=> a.id - b.id)
      this.reverse = !this.reverse
    }
  }

  sortDataPrice() {
    if(this.reverse) {
      let newArray2 = this.productos.sort((a:any,b:any)=> b.precio - a.precio)
      this.productos= newArray2
    }
    else if(!this.reverse){
      let newArray2 = this.productos.sort((a:any,b:any)=> a.precio - b.precio)
      this.productos= newArray2;
    }
    this.reverse = !this.reverse;
    console.log(this.productos)
  }

  sortDataunidadesDisponibles() {
    if(this.reverse) {
      let newArray3 = this.productos.sort((a:any,b:any)=> b.unidadesDisponibles- a.unidadesDisponibles)
      this.productos= newArray3
    }
    else if(!this.reverse){
      let newArray3 = this.productos.sort((a:any,b:any)=> a.unidadesDisponibles - b.unidadesDisponibles)
      this.productos= newArray3;
    }
    this.reverse = !this.reverse;
    console.log(this.productos)
  }

  filtrar(id:any):void{
    console.log('id->',id)
    if(id==1){
      this.mostrarBuscadorNomb()
    }
    else if(id==2){
      this.mostrarBuscadorPa()

    }
  }

  ordenar(id:any):void{
    console.log('id->',id)
    if(id==1){
      this.sortDataPrice()
    }
    else if(id==2){
      this.sortDataunidadesDisponibles()

    }
  }
  

  



}
