import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from '../mascota/mascota';
import { MascotaService } from '../service/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent /*implements OnInit*/ {

  constructor(private mascotaService: MascotaService, private router: Router) {}

  addMascota() {
    this.mascotaService.addMascota(this.formMascota);
    this.router.navigate(['/mascotas']); // Redirige a la lista de mascotas
  }

  // mascotaForm!: FormGroup;
  // clientes = [
  //   { id: 1, nombre: 'Cliente 1' },
  //   { id: 2, nombre: 'Cliente 2' },
  //   // Añadir más clientes según sea necesario
  // ];

  // constructor(private fb: FormBuilder) { }

  // ngOnInit() {
  //   this.mascotaForm = this.fb.group({
  //     nombre: ['', Validators.required],
  //     raza: ['', Validators.required],
  //     edad: ['', [Validators.required, Validators.min(0)]],
  //     peso: ['', [Validators.required, Validators.min(0)]],
  //     enfermedad: [''],
  //     cliente: ['', Validators.required],
  //     fotoURL: ['', Validators.required],
  //   });
  // }

  // onSubmit() {
  //   if (this.mascotaForm.valid) {
  //     const mascotaData = this.mascotaForm.value;
  //     console.log(mascotaData);
  //     // Aquí puedes hacer la lógica de enviar los datos al backend
  //   }
  // }

  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;

  formMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    fotoURL: '',
    enfermedad: '',
    estado: true
  };

  addMascotaForm() {
    console.log(this.formMascota);

    this.sendMascota = Object.assign({}, this.formMascota);

    this.addMascotaEvent.emit(this.sendMascota);
  }

  // addMascota(form: any) {
  //   console.log(this.formMascota);

  //   this.sendMascota = Object.assign({}, this.formMascota);

  //   this.addMascotaEvent.emit(this.sendMascota);
  // }
}
