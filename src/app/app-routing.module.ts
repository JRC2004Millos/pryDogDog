import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { MostrarMascotasComponent } from './mostrar-mascotas/mostrar-mascotas.component';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';
import { AddMascotaComponent } from './add-mascota/add-mascota.component';
import { ModificarMascotaComponent } from './modificar-mascota/modificar-mascota.component';
//import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'veterinario', component: VeterinarioComponent },
  { path: 'mascotas', component: MostrarMascotasComponent },
  { path: 'MostrarCliente', component: MostrarClientesComponent },
  { path: 'add-mascota', component: AddMascotaComponent },
  { path: 'modificar-mascota', component: ModificarMascotaComponent },
  //{ path: 'administrador', component: AdministradorComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

export {routes}
