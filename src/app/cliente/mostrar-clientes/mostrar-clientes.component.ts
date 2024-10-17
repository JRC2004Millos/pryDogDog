import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-mostrar-clientes',
  templateUrl: './mostrar-clientes.component.html',
  styleUrls: ['./mostrar-clientes.component.css']
})
export class MostrarClientesComponent implements OnInit {

  listaClientes: Cliente[] = [];
  listaFiltrada: Cliente[] = [];
  searchTerm: string = ''; // Término de búsqueda

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.findAll().subscribe((clientes) => {
      this.listaClientes = clientes;
      this.listaFiltrada = clientes; // Inicialmente, la lista filtrada contiene todos los clientes
    });
  }

  eliminarCliente(cliente: Cliente): void {
    const index = this.listaClientes.indexOf(cliente);
    if (index !== -1) {
      this.listaClientes.splice(index, 1);
      this.listaFiltrada = [...this.listaClientes]; // Actualiza la lista filtrada
      this.clienteService.deleteById(cliente.id).subscribe(() => {
        console.log('Cliente eliminado');
      });
    }
  }

  buscarCliente(): void {
    const term = this.searchTerm.toLowerCase();
    this.listaFiltrada = this.listaClientes.filter(cliente =>
      cliente.nombre.toLowerCase().includes(term) || 
      cliente.cedula.toString().includes(term)
    );
  }
}
