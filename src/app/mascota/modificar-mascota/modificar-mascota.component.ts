import { Component, OnInit } from '@angular/core';
import { MascotaService } from 'src/app/service/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';

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

  mascota!: Mascota;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.mascotaService.findById(id).subscribe((mascota) => {
        this.mascota = mascota;
        this.formMascota = { ...mascota };
      })
    })
  }


  modificarMascota() {
    // Actualizar los datos de la mascota en el servicio
    this.mascotaService.updateMascota(this.formMascota).subscribe({
      complete: () => this.router.navigate(['/mascotas'])
    });
  }
}