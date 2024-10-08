import { Component, Input } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../service/mascota.service';
import { Cliente } from '../model/cliente';
import { merge, mergeMap } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  @Input()
  cliente!: Cliente;

  selectedMascota: any = null;

  constructor(
    private clienteService: ClienteService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      const id = Number(params.get('id'));
      this.clienteService.findById(id).pipe(
        mergeMap((clienteInfo) => {
          this.cliente = clienteInfo;
          console.log('Cliente Cargado', this.cliente);
          return this.mascotaService.findClienteMascota(id);
        })
      ).subscribe((mascotas) => {
        this.cliente.mascotas = mascotas;
        console.log('Mascotas Cargadas', this.cliente.mascotas);
      });
    });
  }

  mostrarMascota(event: any) {
    const selectedId = Number(event.target.value); // Convierte a número

    if (selectedId && this.cliente && this.cliente.mascotas) {
      // Busca la mascota en la lista local
      this.selectedMascota = this.cliente.mascotas.find((mascota) => mascota.id === selectedId);

      // Si no se encuentra en la lista local, busca en el servicio
      if (!this.selectedMascota) {
        this.mascotaService.findById(selectedId).subscribe(
          (mascota) => {
            this.selectedMascota = mascota; // Asigna la mascota recibida del observable
            console.log('Mascota seleccionada desde el servicio:', this.selectedMascota);
          },
          (error) => {
            console.error('Error al cargar la mascota:', error); // Manejo de errores
          }
        );
      } else {
        console.log('Mascota seleccionada desde la lista local:', this.selectedMascota);
      }
    } else {
      this.selectedMascota = null; // Restablecer si no hay selección
    }
  }
}
