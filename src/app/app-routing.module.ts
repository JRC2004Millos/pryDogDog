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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'veterinario/:id', component: VeterinarioComponent },
  { path: 'veterinarios', component: MostrarVetsComponent },
  { path: 'mascotas', component: MostrarMascotasComponent },
  { path: 'clientes', component: MostrarClientesComponent },
  { path: 'tratamientos', component: MostrarTratamientosComponent },
  { path: 'add-mascota', component: AddMascotaComponent },
  { path: 'add-cliente', component: AddClienteComponent },
  { path: 'add-vet', component: AddVetComponent },
  { path: 'add-tratamiento', component: AddTratamientoComponent },
  { path: 'modificar-mascota/:id', component: ModificarMascotaComponent },
  { path: 'modificar-cliente/:id', component: ModificarClienteComponent },
  { path: 'modificar-vet/:id', component: ModificarVetComponent },
  {
    path: 'modificar-tratamiento/:id',
    component: ModificarTratamientoComponent,
  },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'admin/negocio', component: AdminDashboardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error/:message', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export { routes };
