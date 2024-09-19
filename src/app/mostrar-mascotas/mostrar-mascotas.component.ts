import { Component } from '@angular/core';
import { Mascota } from '../mascota/mascota';

@Component({
  selector: 'app-mostrar-mascotas',
  templateUrl: './mostrar-mascotas.component.html',
  styleUrls: ['./mostrar-mascotas.component.css']
})
export class MostrarMascotasComponent {

  listaMascotas: Mascota[] = [
    {
      nombre: 'Max',
      raza: 'Labrador',
      edad: 3,
      fotoURL: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Labrador_Retriever_%281210559%29.jpg',
      estado: true,
      enfermedad: 'Ninguna',
      peso: 30
    },
    {
      nombre: 'Luna',
      raza: 'Golden Retriever',
      edad: 5,
      fotoURL: 'https://t1.ea.ltmcdn.com/es/posts/1/6/2/10_curiosidades_del_golden_retriever_21261_600.jpg',
      estado: true,
      enfermedad: 'Alergia al polen',
      peso: 28
    },
    {
      nombre: 'Simba',
      raza: 'Pastor Alemán',
      edad: 4,
      fotoURL: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07German20Shepherd20Dog1.jpg?itok=7Xg-W19h',
      estado: false,
      enfermedad: 'Displasia de cadera',
      peso: 35
    },
    {
      nombre: 'Bella',
      raza: 'Bulldog Francés',
      edad: 2,
      fotoURL: 'https://elarcadelfrances.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-03-12-at-2.03.02-PM-10.jpeg',
      estado: true,
      enfermedad: 'Problemas respiratorios',
      peso: 12
    },
    {
      nombre: 'Rocky',
      raza: 'Beagle',
      edad: 6,
      fotoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Shemsu_Sotis_Perun.jpg/1200px-Shemsu_Sotis_Perun.jpg',
      estado: false,
      enfermedad: 'Otitis crónica',
      peso: 18
    }
  ];

  eliminarMascota(mascota: Mascota): void {
    var index = this.listaMascotas.indexOf(mascota);
    this.listaMascotas.splice(index, 1);
  }

}
