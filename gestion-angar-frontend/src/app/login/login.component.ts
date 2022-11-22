import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios:Usuario  = new Usuario(); 
  


  constructor(private usuarioServicio:UsuarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  //usuario:string = '';
  //contrasena:string = '';
  //onSubmit(){
     
      
    //  console.log('Nombre de Usuario: ',this.usuario);
    //this.usuarioServicio.obtenerUsuarioLogin(this.usuario,this.contrasena).subscribe(dato => {
      //;
    //},error => console.log(error));
  //}
  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  contrasenavar:String = '';
  usernamevar:String = '';

  //usuarioA:Usuario[];
  onSubmit(){
    
    console.log('First Name: ',this.usuarios.contrasena);
    this.contrasenavar = this.usuarios.contrasena;
    this.usernamevar = this.usuarios.usuario;

    this.usuarios = new Usuario();
    this.usuarioServicio.obtenerUsuarioLogin(this.usernamevar,this.contrasenavar).subscribe(dato => {
      if(dato[0]){
      this.usuarios = dato[0];
      }

      if(this.usuarios.idUsuario){

        this.usuarioServicio.setUsuarios(dato[0]);

        localStorage.setItem('login', dato[0]);

        this.irAlaListaDeProductos();
      }else{
        swal(`Error, las credenciales ingresadas son incorrectas...`);
      }

    },error => console.log(error));
  }
}
