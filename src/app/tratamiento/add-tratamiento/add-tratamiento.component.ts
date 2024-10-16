import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/model/consulta';
import { Droga } from 'src/app/model/droga';
import { Mascota } from 'src/app/model/mascota';
import { Veterinario } from 'src/app/model/veterinario';
import { ConsultaService } from 'src/app/service/consulta.service';
import { DrogaService } from 'src/app/service/droga.service';
import { MascotaService } from 'src/app/service/mascota.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-add-tratamiento',
  templateUrl: './add-tratamiento.component.html',
  styleUrls: ['./add-tratamiento.component.css'],
})
export class AddTratamientoComponent {
  constructor(
    private mascotaService: MascotaService,
    private drogaService: DrogaService,
    private veterinarioService: VeterinarioService,
    private consultaService: ConsultaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  mascotas!: Mascota[];
  drogas!: Droga[];
  veterinarios!: Veterinario[];

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.mascotas = mascotas;
    });
    this.drogaService.findAll().subscribe((drogas) => {
      this.drogas = drogas;
    });
    this.veterinarioService.findAll().subscribe((veterinarios) => {
      this.veterinarios = veterinarios;
    });
  }

  formConsulta: Consulta = {
    id: 0,
    fechaConsulta: new Date(),
    cantidad: 0,
    veterinario: {
      id: 0,
      nombre: '',
      cedula: 0,
      especialidad: '',
      fotoURL: '',
      clave: '',
    },
    mascota: {
      id: 0,
      nombre: '',
      raza: '',
      edad: 0,
      peso: 0,
      fotoURL: '',
      enfermedad: '',
      estado: true,
    },
    droga: {
      id: 0,
      nombre: '',
      precioCompra: 0,
      precioVenta: 0,
      unidadesVendidas: 0,
      unidadesDisponibles: 0,
    },
  };

  onMascotaSeleccionada(event: Event): void {
    const selectedMascotaId = (event.target as HTMLSelectElement).value;
    const mascotaSeleccionada = this.mascotas.find(
      (mascota) => mascota.id === +selectedMascotaId
    );
    if (mascotaSeleccionada) {
      this.formConsulta.mascota = mascotaSeleccionada;
    }
  }

  onDrogaSeleccionada(event: Event): void {
    const selectedDrogaId = (event.target as HTMLSelectElement).value;
    const drogaSeleccionada = this.drogas.find(
      (droga) => droga.id === +selectedDrogaId
    );
    if (drogaSeleccionada) {
      this.formConsulta.droga = drogaSeleccionada;
    }
  }

  addTratamiento() {
    if (this.formConsulta.cantidad <= 0) {
      // Manejo de error: La cantidad debe ser mayor que 0
      console.log('La cantidad debe ser mayor que 0.');
    } else if (
      this.formConsulta.cantidad >
      (this.formConsulta.droga?.unidadesDisponibles || 0)
    ) {
      // Manejo de error: La cantidad no puede ser mayor que las unidades disponibles
      console.log('La cantidad solicitada excede las unidades disponibles.');
    } else {
      // Todo está bien, proceder con la operación
      if (this.formConsulta.droga) {
        // Reducir las unidades disponibles y aumentar las unidades vendidas
        this.formConsulta.droga.unidadesDisponibles -=
          this.formConsulta.cantidad;
        this.formConsulta.droga.unidadesVendidas += this.formConsulta.cantidad;

        // Llamada al servicio para actualizar la droga en el backend
        this.drogaService.updateDroga(this.formConsulta.droga).subscribe(
          (response) => {
            console.log('Droga actualizada correctamente:', response);
          },
          (error) => {
            console.error('Error al actualizar la droga:', error);
          }
        );
      } else {
        console.log(
          'No hay suficientes unidades disponibles o la cantidad solicitada es incorrecta.'
        );
      }

      this.formConsulta.fechaConsulta = new Date();
      this.consultaService.add(this.formConsulta).subscribe({
        complete: () => this.router.navigate(['/tratamientos']),
      });
    }
  }
}
