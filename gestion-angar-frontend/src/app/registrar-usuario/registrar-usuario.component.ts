import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario();
  constructor(private usuarioServicio:UsuarioService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('login')){
      console.log('localstorage',localStorage.getItem('login').length);
    }else{
      this.router.navigate(['login']);
    }
  }
  
  guardarUsuario(){
    this.usuarioServicio.RegistrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.guardarUsuario();
  }

  Productos(){
    this.router.navigate(['productos']);
  }

  RegistroProductos(){
    this.router.navigate(['registrar-producto']);
  }

  RegistroUsuarios(){
    this.router.navigate(['registrar-usuario']);
  }

  cerrarSesion(){
    localStorage.removeItem('login');
    this.router.navigate(['login']);
  }

}
