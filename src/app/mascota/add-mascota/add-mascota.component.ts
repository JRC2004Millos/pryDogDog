import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../service/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css'],
})
export class AddMascotaComponent /*implements OnInit*/ {
  constructor(private mascotaService: MascotaService, private router: Router) { }

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
  };
}
