import { Component } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-mostrar-mascotas',
  templateUrl: './mostrar-mascotas.component.html',
  styleUrls: ['./mostrar-mascotas.component.css']
})
export class MostrarMascotasComponent {

  listaMascotas!: Mascota[];
  mascota!: Mascota;

  constructor(private mascotaService: MascotaService){  }

  ngOnInit(): void{

    this.mascotaService.findAll().subscribe((mascotas) => {
      this.listaMascotas = mascotas;
    });
  }

  eliminarMascota(mascota: Mascota): void {
    var index = this.listaMascotas.indexOf(mascota);
    this.listaMascotas.splice(index, 1);
    this.mascotaService.deleteById(mascota.id);
  }

  modificarMascota(mascota: Mascota): void {
    var index = this.listaMascotas.indexOf(mascota);
    this.listaMascotas[index] = mascota;
  }
}
