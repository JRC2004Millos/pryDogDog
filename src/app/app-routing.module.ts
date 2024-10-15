import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { MostrarMascotasComponent } from './mascota/mostrar-mascotas/mostrar-mascotas.component';
import { MostrarClientesComponent } from './cliente/mostrar-clientes/mostrar-clientes.component';
import { AddMascotaComponent } from './mascota/add-mascota/add-mascota.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';
import { ModificarClienteComponent } from './cliente/modificar-cliente/modificar-cliente.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'veterinario/:id', component: VeterinarioComponent },
  { path: 'mascotas', component: MostrarMascotasComponent },
  { path: 'clientes', component: MostrarClientesComponent },
  { path: 'add-mascota', component: AddMascotaComponent },
  { path: 'add-cliente', component: AddClienteComponent },
  { path: 'modificar-mascota/:id', component: ModificarMascotaComponent },
  { path: 'modificar-cliente/:id', component: ModificarClienteComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'admin/negocio', component: AdminDashboardComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

export {routes}
