import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Proforma } from '../proforma';
import { ProformaService } from '../proforma.service';

@Component({
  selector: 'app-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css']
})
export class ProductoDetallesComponent implements OnInit {

  idProducto:number;
  cantidadUsuario:number;
  producto:Producto;

  proforma:Proforma;
  constructor(private route: ActivatedRoute,private productoServicio:ProductoService,private proformaServicio:ProformaService,
    private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem('login')){
      console.log('localstorage',localStorage.getItem('login').length);
    }else{
      this.router.navigate(['login']);
    }

    this.idProducto = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.idProducto).subscribe(dato =>{
      this.producto = dato;
      swal(`Generar Proforma del producto: ${this.producto.nombre}`);

      this.proforma = new Proforma();
      this.proforma.idProducto = this.producto.idProducto;
    });
  }

  irAlaListaDeProductos(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.idProducto = this.route.snapshot.params['id'];
    this.producto = new Producto();
    this.productoServicio.obtenerProductoPorId(this.idProducto).subscribe(dato =>{
    this.producto = dato;
    this.cantidadUsuario = this.proforma.cantidadUsuario;

      
 
      this.proforma = new Proforma();
      this.proforma.idProducto = this.producto.idProducto;
      this.proforma.nombre=this.producto.nombre;
      this.proforma.codLote=this.producto.codLote;
      this.proforma.cantidad=this.producto.cantidad;
      this.proforma.precio=this.producto.precio;
      this.proforma.color=this.producto.color;
      this.proforma.talla=this.producto.talla;
      this.proforma.modelo=this.producto.modelo;
      this.proforma.cantidadUsuario=this.cantidadUsuario;

      console.log(dato);

      if(this.cantidadUsuario <= this.producto.cantidad){
        this.proformaServicio.RegistrarProforma(this.proforma).subscribe(dato => {
          console.log(dato);
          this.irAlaListaDeProductos();
        },error => console.log(error));

      }else{
        swal(`Error, el campo debe ser menor al stock actual del producto`);
      }

    });
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
