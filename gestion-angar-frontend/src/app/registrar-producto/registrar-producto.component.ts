import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.css']
})
export class RegistrarProductoComponent implements OnInit {

  producto : Producto = new Producto();
  constructor(private productoServicio:ProductoService,private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('login')){
      console.log('localstorage',localStorage.getItem('login').length);
    }else{
      this.router.navigate(['login']);
    }
    
    console.log(this.producto);
  }

  guardarProducto(){
    this.productoServicio.RegistrarProducto(this.producto).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeProductos();
    },error => console.log(error));
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.guardarProducto();
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
