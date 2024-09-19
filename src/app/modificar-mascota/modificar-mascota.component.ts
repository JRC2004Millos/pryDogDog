import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from '../service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from '../mascota/mascota';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})

export class ModificarMascotaComponent implements OnInit {

  formMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    fotoURL: '',
    estado: true,
    enfermedad: '',
    peso: 0
  };

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID de la mascota desde la URL
    const id = +this.route.snapshot.paramMap.get('id')!;
    
    // Cargar los datos de la mascota en el formulario
    const mascota = this.mascotaService.findById(id);
    if (mascota) {
      // Asignamos todos los valores de la mascota seleccionada al formulario
      this.formMascota = { ...mascota };
    }
  }

  modificarMascota() {
    // Actualizar los datos de la mascota en el servicio
    this.mascotaService.updateMascota(this.formMascota);

    // Redirigir a la lista de mascotas
    this.router.navigate(['/mascotas']);
  }
}