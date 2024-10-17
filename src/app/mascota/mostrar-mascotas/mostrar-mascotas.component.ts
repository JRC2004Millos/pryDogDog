import { Component } from '@angular/core';
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-mostrar-mascotas',
  templateUrl: './mostrar-mascotas.component.html',
  styleUrls: ['./mostrar-mascotas.component.css'],
})
export class MostrarMascotasComponent {
  listaMascotas: Mascota[] = [];
  listaFiltrada: Mascota[] = [];
  searchTerm: string = '';

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.listaMascotas = mascotas;
      this.listaFiltrada = mascotas; // Inicialmente, la lista filtrada contiene todas las mascotas
    });
  }

  eliminarMascota(mascota: Mascota): void {
    const index = this.listaMascotas.indexOf(mascota);
    this.mascotaService.deleteById(mascota.id).subscribe(() => {
      if (index !== -1) {
        this.listaMascotas.splice(index, 1);
        this.listaFiltrada = [...this.listaMascotas]; // Actualiza la lista filtrada
      }
    });
  }

  buscarMascota(): void {
    const term = this.searchTerm.toLowerCase();
    this.listaFiltrada = this.listaMascotas.filter((mascota) =>
      mascota.nombre.toLowerCase().includes(term) ||
      mascota.raza.toLowerCase().includes(term)
    );
  }
}
