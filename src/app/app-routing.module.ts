import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'verProducto',
    component: VerProductoComponent
  }
  ,
  {
    path: 'listaProductos',
    component: ListaProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
