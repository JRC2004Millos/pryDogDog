import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/model/consulta';
import { Droga } from 'src/app/model/droga';
import { Mascota } from 'src/app/model/mascota';
import { ConsultaService } from 'src/app/service/consulta.service';
import { DrogaService } from 'src/app/service/droga.service';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-add-tratamiento',
  templateUrl: './add-tratamiento.component.html',
  styleUrls: ['./add-tratamiento.component.css'],
})
export class AddTratamientoComponent {
  constructor(
    private mascotaService: MascotaService,
    private drogaService: DrogaService,
    private consultaService: ConsultaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  mascotas!: Mascota[];
  drogas!: Droga[];

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.mascotas = mascotas;
    });
    this.drogaService.findAll().subscribe((drogas) => {
      this.drogas = drogas;
    });
  }

  formConsulta: Consulta = {
    id: 0,
    fechaConsulta: new Date(),
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
      unidades: 0,
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
    this.formConsulta.fechaConsulta = new Date();
    this.consultaService.add(this.formConsulta).subscribe({
      complete: () => this.router.navigate(['/tratamiento']),
    });
  }
}
