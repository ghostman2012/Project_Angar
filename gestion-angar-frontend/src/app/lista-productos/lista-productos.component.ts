import swal from 'sweetalert2';
import { Producto } from '../producto';
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';


@Component({ 
  
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  
  searchText:any;
  productos:Producto[];
  usuarios:Usuario;
  usuarioss:Usuario[];

  constructor(private productoServicio:ProductoService, private router:Router,private usuarioServicio: UsuarioService) { }

  ngOnInit(): void {
    
    this.usuarioServicio.getUsuarios().subscribe(login => {
      this.usuarioss = login;
      localStorage.getItem('login');
      console.log('login:',login);
      

    });

    if(localStorage.getItem('login')){
      console.log('localstorage',localStorage.getItem('login').length);
      this.obtenerProductos();
    }else{
      this.router.navigate(['login']);
    }

   // this.obtenerProductos();
  }

  cerrarSesion(){
    localStorage.removeItem('login');
    this.router.navigate(['login']);
  }

  actualizarProducto(idProducto:number){
    this.router.navigate(['actualizar-producto',idProducto]);
  }

  eliminarProducto(idProducto:number){
    swal({
      title: 'Estas seguro?',
      text: 'Confirma si deseas eliminar el producto',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Si, eliminalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.productoServicio.eliminarProducto(idProducto).subscribe(dato => {
          console.log(dato);
          this.obtenerProductos();
          swal(
            'Producto eliminado',
            'El producto ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  private obtenerProductos(){
    this.productoServicio.obtenerListaDeProductos().subscribe(dato => {
      this.productos = dato;
    });
  }

  verDetallesDelProducto(idProducto:number){
    this.router.navigate(['producto-detalles',idProducto]);
  }

  Productos(){
    this.router.navigate(['productos']);
  }

  listaProforma(){
    this.router.navigate(['lista-proforma']);
  }

  RegistroProductos(){
    this.router.navigate(['registrar-producto']);
  }

  RegistroUsuarios(){
    this.router.navigate(['registrar-usuario']);
  }
}
