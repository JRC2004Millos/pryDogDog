import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { MostrarMascotasComponent } from './mostrar-mascotas/mostrar-mascotas.component';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';
import { AddMascotaComponent } from './add-mascota/add-mascota.component';
import { ModificarMascotaComponent } from './modificar-mascota/modificar-mascota.component';
import { MascotaTableComponent } from './mascota/mascota-table/mascota-table.component';

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
    MascotaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }