import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  createProducto(usuario: any) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/producto/guardar", usuario, httpOptions);
  }
  getProductos() {
    return this.http.get(`http://localhost:8080/producto/buscar`)
  }

  getProducto() {
    return this.http.get(`http://localhost:8080/producto/buscar/` + sessionStorage.getItem("idProducto"))
  }

  eliminarProducto(): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:8080/producto/eliminar/` + sessionStorage.getItem("idProducto"))
  }
}
