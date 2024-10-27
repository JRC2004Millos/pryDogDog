import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {
  clienteForm: FormGroup;

  @Output() addClienteEvent = new EventEmitter<Cliente>();

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.emailDomainValidator]],
      cedula: [0, Validators.required],
      celular: [0, Validators.required]
    });
  }

  // Validador personalizado para el dominio del correo
  emailDomainValidator(control: AbstractControl): ValidationErrors | null {
    const email: string = control.value;
    const domainPattern = /^[^\s@]+@[^\s@]+\.(com|org|edu|net)$/;  // Acepta solo dominios específicos

    if (!domainPattern.test(email)) {
      return { invalidDomain: true }; // Retorna un error si el dominio es inválido
    }
    return null; // Si no hay error, retorna null
  }

  addCliente() {
    if (this.clienteForm.valid) {
      const nuevoCliente: Cliente = this.clienteForm.value;
      this.clienteService.addCliente(nuevoCliente).subscribe({
        complete: () => this.router.navigate(['/clientes'])
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}