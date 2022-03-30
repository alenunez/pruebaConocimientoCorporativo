import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { FormularioRegistroComponent } from './components/formulario-registro/formulario-registro.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BarraSuperiorComponent,
    FormularioRegistroComponent,
    HomeComponent,
    VerProductoComponent,
    ListaProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ReactiveFormsModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
