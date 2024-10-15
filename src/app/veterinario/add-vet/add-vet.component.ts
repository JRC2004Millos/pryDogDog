import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-add-vet',
  templateUrl: './add-vet.component.html',
  styleUrls: ['./add-vet.component.css'],
})
export class AddVetComponent {
  constructor(private vetService: VeterinarioService, private router: Router) {}

  addVet() {
    this.vetService.add(this.formVet);
    this.addVetEvent.emit(this.sendVet);
    this.router.navigate(['/veterinarios']); // Redirige a la lista de mascotas
  }

  @Output()
  addVetEvent = new EventEmitter<Veterinario>();

  sendVet!: Veterinario;

  formVet: Veterinario = {
    id: 0,
    nombre: '',
    especialidad: '',
    cedula: 0,
    fotoURL: '',
    clave: '',
  };
}
