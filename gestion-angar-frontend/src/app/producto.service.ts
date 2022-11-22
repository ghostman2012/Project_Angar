import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root' 
})
export class ProductoService {

  //Esta URL obtiene el listado de todos los productos en el backend
  private baseURL = "http://localhost:8080/api/v1/producto/listado";

  constructor(private httpClient : HttpClient) { }

  //Este sirve para obtener los productos
  obtenerListaDeProductos():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL}`)
  }

  RegistrarProducto(producto:Producto): Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/producto/registro",producto);
  }

  actualizarProducto(idProducto:number,producto:Producto) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${idProducto}`,producto);
  }

  obtenerProductoPorId(idProducto:number):Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.baseURL}/${idProducto}`);
  }

  eliminarProducto(idProducto:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idProducto}`);
  }
}
