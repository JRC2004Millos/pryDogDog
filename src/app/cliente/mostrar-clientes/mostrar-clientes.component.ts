import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent {

  listaClientes!: Cliente[];
  cliente!: Cliente;

  constructor(private clienteService: ClienteService){  }

  ngOnInit(): void {

    this.clienteService.findAll().subscribe((clientes) => {
      this.listaClientes = clientes;
    });
  }

  eliminarCliente(cliente: Cliente): void{
    var index = this.listaClientes.indexOf(cliente);
    this.listaClientes.splice(index, 1);
    this.clienteService.deleteById(cliente.id);
  }

}
