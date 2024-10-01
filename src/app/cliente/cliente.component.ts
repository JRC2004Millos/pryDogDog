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
          console.log(this.cliente);
          return this.mascotaService.findClienteMascota(id);
        })
      ).subscribe((mascotas) => {
        this.cliente.mascotas = mascotas;
      })
    })
  }
}
