import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proforma } from './proforma';

@Injectable({
  providedIn: 'root'
})
export class ProformaService {

  private baseURL = "http://localhost:8080/api/v1/proforma/listado";

  private deleteURL = "http://localhost:8080/api/v1/proforma/eliminar";

  constructor(private httpClient : HttpClient) { }

  //Este sirve para obtener las proformas
  obtenerListaDeProforma():Observable<Proforma[]>{
    return this.httpClient.get<Proforma[]>(`${this.baseURL}`)
  }

  RegistrarProforma(proforma:Proforma): Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/proforma/registro",proforma);
  }

  eliminarProforma():Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}`);
  }
}
