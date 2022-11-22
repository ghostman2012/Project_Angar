import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Injectable, Type } from '@angular/core';

 
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   private usuario$ = new BehaviorSubject<Usuario[]>([]);
   //Esta URL obtiene el listado de todos los productos en el backend
   private login = "http://localhost:8080/api/v1/usuario/search";

   constructor(private httpClient : HttpClient) { }
 
   RegistrarUsuario(usuario:Usuario): Observable<Object>{
     return this.httpClient.post("http://localhost:8080/api/v1/usuario/registro",usuario);
   }

   obtenerUsuarioLogin(usuario:String,contrasena:String):Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.login}?query=${usuario}&password=${contrasena}`);
  }

  setUsuarios(usuaios:Usuario[]){
    this.usuario$.next(usuaios);
  }

  getUsuarios(){
    return this.usuario$.asObservable();
  }

}
