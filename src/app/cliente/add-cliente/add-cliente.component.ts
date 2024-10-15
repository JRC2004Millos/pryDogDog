import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent {

  constructor(private clienteService: ClienteService, private router: Router) {}

  @Output() addClienteEvent = new EventEmitter<Cliente>();

  formCliente: Cliente = {
    id: 0,
    nombre: '',
    email: '',
    cedula: 0,
    celular: 0
  };

  addCliente() {
    this.clienteService.addCliente(this.formCliente).subscribe({
      complete: () => this.router.navigate(['/clientes'])
    });
  }
}
