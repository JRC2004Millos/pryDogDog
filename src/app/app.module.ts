import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

// Componentes de la aplicación
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { MostrarMascotasComponent } from './mascota/mostrar-mascotas/mostrar-mascotas.component';
import { MostrarClientesComponent } from './cliente/mostrar-clientes/mostrar-clientes.component';
import { AddMascotaComponent } from './mascota/add-mascota/add-mascota.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { CarouselModule } from './carousel/carousel.module';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';
import { ModificarClienteComponent } from './cliente/modificar-cliente/modificar-cliente.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { MostrarVetsComponent } from './veterinario/mostrar-vets/mostrar-vets.component';
import { AddVetComponent } from './veterinario/add-vet/add-vet.component';
import { ModificarVetComponent } from './veterinario/modificar-vet/modificar-vet.component';
import { AddTratamientoComponent } from './tratamiento/add-tratamiento/add-tratamiento.component';
import { MostrarTratamientosComponent } from './tratamiento/mostrar-tratamientos/mostrar-tratamientos.component';
import { ModificarTratamientoComponent } from './tratamiento/modificar-tratamiento/modificar-tratamiento.component';
import { ErrorComponent } from './error/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ClienteComponent,
    VeterinarioComponent,
    MostrarMascotasComponent,
    MostrarClientesComponent,
    AddMascotaComponent,
    ModificarMascotaComponent,
    AddClienteComponent,
    ModificarClienteComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    MostrarVetsComponent,
    AddVetComponent,
    ModificarVetComponent,
    AddTratamientoComponent,
    MostrarTratamientosComponent,
    ModificarTratamientoComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
