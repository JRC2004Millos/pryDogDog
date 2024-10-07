import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../service/mascota.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/model/cliente';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css'],
})
export class AddMascotaComponent /*implements OnInit*/ {
  constructor(private mascotaService: MascotaService, private router: Router, private clienteService: ClienteService) { }

  clientes!: Cliente[];

  ngOnInit(): void {
    this.clienteService.findAll().subscribe((data) => {
      this.clientes = data;
    });
  }

  addMascota() {
    this.mascotaService.addMascota(this.formMascota);
    this.addMascotaEvent.emit(this.sendMascota);
    this.router.navigate(['/mascotas']); // Redirige a la lista de mascotas
  }

  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;

  formMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    fotoURL: '',
    enfermedad: '',
    estado: true,
    cliente: {
      id: 0,
      nombre: '',
      cedula: 0,
      email: '',
      celular: 0
    }
  };

  onClienteSeleccionado(event: Event): void {
    const selectedClientId = (event.target as HTMLSelectElement).value;
    const clienteSeleccionado = this.clientes.find(cliente => cliente.id === +selectedClientId);

    if (clienteSeleccionado) {
      this.formMascota.cliente = clienteSeleccionado;
    }
  }

}
