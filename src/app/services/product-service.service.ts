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
    return this.http.post<any>("https://conocimientoinformatico.herokuapp.com/producto/guardar", usuario, httpOptions);
  }
  getProductos() {
    return this.http.get("https://conocimientoinformatico.herokuapp.com/producto/buscar")
  }

  getProducto() {
    return this.http.get("https://conocimientoinformatico.herokuapp.com/producto/buscar/" + sessionStorage.getItem("idProducto"))
  }

  eliminarProducto(): Observable<{}> {
    return this.http.delete<{}>("https://conocimientoinformatico.herokuapp.com/producto/eliminar/" + sessionStorage.getItem("idProducto"))
  }
}
