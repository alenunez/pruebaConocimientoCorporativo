import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  producto:any ={}



  constructor(private api:ProductServiceService) { }

  ngOnInit(): void {
  }
  crearProducto(){
    let formulario:any = document.getElementById("crear");
    let formularioValido:boolean = formulario.reportValidity();
    if( formularioValido ){
      this.api.createProducto(this.producto).subscribe(
        data => this.confirmar(data)
      )
    }
  }
  confirmar(resultado:any){
    if(resultado){
      alert("Producto creado exitosamente.");
      this.producto={};
    }
    else{
      alert("Error al crear el usuario");
  
    }
  }
  cerrar(){
    location.href="verProducto"
  }

}