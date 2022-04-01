import { Producto } from './../../models/producto';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  producto: Producto=new Producto()
  prod:any;

  constructor( private api: ProductServiceService) { }

  ngOnInit(): void {
    this.verProducto();
  }
  verProducto(){
    this.api.getProducto().subscribe(data=>{
      this.prod=data;
      this.producto=this.prod;
    })
  }

  cerrar(){}
  actualizarProducto(){}

}
