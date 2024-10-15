import { Component } from '@angular/core';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-mostrar-vets',
  templateUrl: './mostrar-vets.component.html',
  styleUrls: ['./mostrar-vets.component.css'],
})
export class MostrarVetsComponent {
  listaVets!: Veterinario[];
  veterinario!: Veterinario;

  constructor(private veterinarioService: VeterinarioService) {}

  ngOnInit(): void {
    this.veterinarioService.findAll().subscribe((veterinarios) => {
      this.listaVets = veterinarios;
    });
  }

  eliminarVeterinario(veterinario: Veterinario): void {
    var index = this.listaVets.indexOf(veterinario);
    this.listaVets.splice(index, 1);
    this.veterinarioService.deleteById(veterinario.id);
  }

  modificarVeterinario(veterinario: Veterinario): void {
    var index = this.listaVets.indexOf(veterinario);
    this.listaVets[index] = veterinario;
  }
}
