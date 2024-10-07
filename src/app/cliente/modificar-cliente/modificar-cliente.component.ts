import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent {

  formCliente = {
    id: 0,
    nombre: '',
    cedula: 0,
    celular: 0,
    email: ''
  };

  cliente!: Cliente;

  constructor(private route: ActivatedRoute, private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.clienteService.findById(id).subscribe(cliente => {
        this.cliente = cliente;
        this.formCliente = { ...cliente };
      })
    })
  }

  modificarCliente() {
    this.clienteService.updateCliente(this.formCliente);
    this.router.navigate(['/clientes']);
  }
}
