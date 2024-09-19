import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  selectedType: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      type: ['', Validators.required],
      cedulaVeterinario: [''],
      passwordVet: [''],
      usuario: [''],
      password: [''],
      cedula: [''],
    });
  }

  onUserTypeChange(event: any) {
    this.selectedType = event.target.value;
  }

  onSubmit() {
    const userType = this.loginForm.get('type')?.value;
    
    if (userType === '1') {
      this.router.navigate(['/veterinario']);  // Redirige a la pantalla de Veterinario
    } else if (userType === '2') {
      this.router.navigate(['/administrador']);  // Redirige a la pantalla de Administrador
    } else if (userType === '3') {
      this.router.navigate(['/cliente']);  // Redirige a la pantalla de Cliente
    }
  }

}