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
import { MostrarVetsComponent } from './veterinario/mostrar-vets/mostrar-vets.component';
import { AddVetComponent } from './veterinario/add-vet/add-vet.component';
import { ModificarVetComponent } from './veterinario/modificar-vet/modificar-vet.component';
import { AddTratamientoComponent } from './tratamiento/add-tratamiento/add-tratamiento.component';
import { MostrarTratamientosComponent } from './tratamiento/mostrar-tratamientos/mostrar-tratamientos.component';
import { ModificarTratamientoComponent } from './tratamiento/modificar-tratamiento/modificar-tratamiento.component';
import { ErrorComponent } from './error/error/error.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

    // Veterinario routes with AuthGuard and expected role
  { path: 'veterinario', component: VeterinarioComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' } },
  { path: 'mascotas', component: MostrarMascotasComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' }},
  { path: 'clientes', component: MostrarClientesComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' } },
  { path: 'modificar-cliente/:id', component: ModificarClienteComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' } },
  { path: 'tratamientos', component: MostrarTratamientosComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' }},
  { path: 'add-mascota', component: AddMascotaComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' } },
  { path: 'add-cliente', component: AddClienteComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' }},
  { path: 'modificar-mascota/:id', component: ModificarMascotaComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' } },
  { path: 'add-tratamiento', component: AddTratamientoComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' } },
  { path: 'modificar-tratamiento/:id', component: ModificarTratamientoComponent, canActivate: [AuthGuard], data: { expectedRole: 'VETERINARIO' } },

  // Admin routes with AuthGuard and expected role
  { path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'admin/negocio', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'veterinarios', component: MostrarVetsComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'add-vet', component: AddVetComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMIN' } },
  { path: 'modificar-vet/:id', component: ModificarVetComponent, canActivate: [AuthGuard], data: { expectedRole: 'ADMIN' } },

  { path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard], data: { expectedRole: 'CLIENTE' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error/:message', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export { routes };