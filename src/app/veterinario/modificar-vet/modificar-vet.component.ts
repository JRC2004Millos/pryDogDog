import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-modificar-vet',
  templateUrl: './modificar-vet.component.html',
  styleUrls: ['./modificar-vet.component.css']
})
export class ModificarVetComponent {

  formVet: Veterinario = {
    id: 0,
    nombre: '',
    cedula: 0,
    especialidad: '',
    fotoURL: '',
    clave: ''
  };

  vet!: Veterinario;

  constructor(
    private route: ActivatedRoute,
     private vetService: VeterinarioService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.vetService.findById(id).subscribe((vet) => {
        this.vet = vet;
        this.formVet = { ...vet };
      })
    })
  }

  modificarVet() {
    this.vetService.update(this.formVet).subscribe({
      complete: () => this.router.navigate(['/veterinarios'])
    })
  }
}
