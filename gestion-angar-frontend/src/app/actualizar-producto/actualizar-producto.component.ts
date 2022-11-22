import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  idProducto:number;
  producto:Producto = new Producto(); 
  constructor(private productoService:ProductoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    if(localStorage.getItem('login')){
      console.log('localstorage',localStorage.getItem('login').length);
    }else{
      this.router.navigate(['login']);
    }

    this.idProducto = this.route.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.idProducto).subscribe(dato =>{
      this.producto = dato;
    },error => console.log(error));
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.productoService.actualizarProducto(this.idProducto,this.producto).subscribe(dato => {
      this.irAlaListaDeProductos();
    },error => console.log(error));
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
