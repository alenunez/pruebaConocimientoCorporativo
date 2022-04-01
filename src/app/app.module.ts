import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatRadioModule} from '@angular/material/radio';


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
import {NgxPaginationModule} from 'ngx-pagination';
import { BuscarNombrePipe } from './pipes/buscar-nombre.pipe';
import { BuscarPaisPipe } from './pipes/buscar-pais.pipe';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BarraSuperiorComponent,
    FormularioRegistroComponent,
    HomeComponent,
    VerProductoComponent,
    ListaProductosComponent,
    BuscarNombrePipe,
    BuscarPaisPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    ReactiveFormsModule,
     FormsModule,
     HttpClientModule,
     NgxPaginationModule,
     MatRadioModule
     
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
