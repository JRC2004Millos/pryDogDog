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
import { MostrarMascotasComponent } from './mascota/mostrar-mascotas/mostrar-mascotas.component';
import { MostrarClientesComponent } from './cliente/mostrar-clientes/mostrar-clientes.component';
import { AddMascotaComponent } from './mascota/add-mascota/add-mascota.component';
import { ModificarMascotaComponent } from './mascota/modificar-mascota/modificar-mascota.component';
import { MascotaTableComponent } from './mascota/mascota-table/mascota-table.component';
import { CarouselModule } from './carousel/carousel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddClienteComponent } from './cliente/add-cliente/add-cliente.component';

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
    MascotaTableComponent,
    AddClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    CarouselModule, BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }