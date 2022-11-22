import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaProformaComponent } from './lista-proforma/lista-proforma.component';
import { LoginComponent } from './login/login.component';
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';
import { RegistrarProformaComponent } from './registrar-proforma/registrar-proforma.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {path : 'productos',component:ListaProductosComponent},
  {path : '' , redirectTo:'productos',pathMatch:'full'},
  {path: 'registrar-producto',component:RegistrarProductoComponent},
  {path : 'actualizar-producto/:id',component : ActualizarProductoComponent},
  {path : 'producto-detalles/:id',component : ProductoDetallesComponent},
  {path : 'registrar-usuario',component:RegistrarUsuarioComponent},
  {path : 'registrar-proforma',component:RegistrarProformaComponent},
  {path : 'lista-proforma',component:ListaProformaComponent},
  {path : 'login',component:LoginComponent},
  {path : '', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
