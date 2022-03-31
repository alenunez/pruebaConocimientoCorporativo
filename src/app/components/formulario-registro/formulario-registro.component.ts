import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  //producto:any ={}
  producto :Producto=new Producto


  constructor(private api:ProductServiceService) { }

  ngOnInit(): void {
  }
  crearProducto(){
    let formulario:any = document.getElementById("crear");
    let formularioValido:boolean = formulario.reportValidity();
    if( formularioValido){
      this.api.createProducto(this.producto).subscribe(
        data => this.confirmar(data)
      )
    }
  }
  confirmar(resultado:any){
    if(resultado){
      alert("Usuario creado exitosamente.");
    }
    else{
      alert("Error al crear el usuario");
  
    }
  }

}
