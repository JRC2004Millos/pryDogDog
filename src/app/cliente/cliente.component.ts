import { Component, Input } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from '../service/mascota.service';
import { Cliente } from '../model/cliente';
import { Mascota } from '../model/mascota';
import { Consulta } from '../model/consulta';
import { AuthService } from 'src/app/service/auth.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  @Input() cliente!: Cliente;
  selectedMascota: Mascota | null | undefined = null;
  consultas: Consulta[] = []; // Lista de consultas de la mascota seleccionada

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
    private mascotaService: MascotaService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   const id = Number(params.get('id'));
    //   this.clienteService
    //     .findById(id)
    //     .pipe(
    //       mergeMap((clienteInfo) => {
    //         this.cliente = clienteInfo;
    //         return this.mascotaService.findClienteMascota(id);
    //       })
    //     )
    //     .subscribe((mascotas) => {
    //       this.cliente.mascotas = mascotas;
    //     });
    // });
    this.clienteService.clienteHome().subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  mostrarMascota(event: any) {
    const selectedId = Number(event.target.value); // Convierte a número

    if (selectedId) {
      this.mascotaService.findById(selectedId).subscribe(
        (mascota) => {
          this.selectedMascota = mascota;

          // Obtener las consultas asociadas a esta mascota
          this.mascotaService.findConsultasByMascotaId(selectedId).subscribe(
            (consultas) => {
              this.consultas = consultas; // Asignar consultas
            },
            (error) => {
              console.error('Error al obtener consultas:', error);
            }
          );
        },
        (error) => {
          console.error('Error al cargar la mascota:', error); // Manejo de errores
        }
      );
    } else {
      this.selectedMascota = null; // Restablecer si no hay selección
      this.consultas = [];
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
