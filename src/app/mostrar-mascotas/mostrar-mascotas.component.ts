import { Component } from '@angular/core';
import { Mascota } from '../mascota/mascota';
import { MascotaCL } from '../model/mascota-cl';
import { MascotaService } from '../service/mascota.service';

@Component({
  selector: 'app-mostrar-mascotas',
  templateUrl: './mostrar-mascotas.component.html',
  styleUrls: ['./mostrar-mascotas.component.css']
})
export class MostrarMascotasComponent {

  listaMascotas!: Mascota[];

  constructor(private mascotaService: MascotaService){  }

  ngOnInit(): void{
    this.listaMascotas = this.mascotaService.findAll();
  }

  eliminarMascota(mascota: Mascota): void {
    var index = this.listaMascotas.indexOf(mascota);
    this.listaMascotas.splice(index, 1);
    this.mascotaService.deleteMascota(mascota);
  }

  modificarMascota(mascota: Mascota): void {
    var index = this.listaMascotas.indexOf(mascota);
    this.listaMascotas[index] = mascota;
  }

}
