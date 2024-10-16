import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';
import { DrogaService } from 'src/app/service/droga.service';

@Component({
  selector: 'app-modificar-tratamiento',
  templateUrl: './modificar-tratamiento.component.html',
  styleUrls: ['./modificar-tratamiento.component.css'],
})
export class ModificarTratamientoComponent {
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
      fotoURL: '',
      estado: true,
      enfermedad: '',
      peso: 0,
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

  consulta!: Consulta;

  constructor(
    private router: Router,
    private consultaService: ConsultaService,
    private drogaService: DrogaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = Number(params['id']);
      this.consultaService.findById(id).subscribe((consulta) => {
        this.consulta = consulta;
        this.formConsulta = { ...consulta };
      });
    });
    console.log(this.consulta);
  }

  modificarTratamiento() {
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
      this.consultaService.update(this.formConsulta).subscribe({
        complete: () => this.router.navigate(['/tratamientos']),
      });
    }
  }
}
