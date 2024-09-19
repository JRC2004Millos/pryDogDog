import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})

export class ModificarMascotaComponent implements OnInit {
  mascotaForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      enfermedad: [''],
      cliente: ['', Validators.required],
      fotoURL: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.mascotaForm.valid) {
      console.log(this.mascotaForm.value);
    }
  }
}
