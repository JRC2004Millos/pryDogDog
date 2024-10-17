import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-mostrar-tratamientos',
  templateUrl: './mostrar-tratamientos.component.html',
  styleUrls: ['./mostrar-tratamientos.component.css'],
})
export class MostrarTratamientosComponent implements OnInit {
  listaConsultas: Consulta[] = [];
  listaFiltrada: Consulta[] = [];
  searchTerm: string = '';

  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {
    this.consultaService.findAll().subscribe(
      (consultas) => {
        this.listaConsultas = consultas;
        this.listaFiltrada = consultas; // Inicialmente todas las consultas se muestran
      },
      (error) => {
        console.error('Error al cargar las consultas:', error);
      }
    );
  }

  buscarTratamiento(): void {
    const term = this.searchTerm.toLowerCase();
    this.listaFiltrada = this.listaConsultas.filter((consulta) =>
      consulta.mascota?.nombre.toLowerCase().includes(term) ||
      consulta.veterinario?.nombre.toLowerCase().includes(term) ||
      consulta.droga?.nombre.toLowerCase().includes(term)
    );
  }

  eliminarTratamiento(consulta: Consulta): void {
    this.listaConsultas = this.listaConsultas.filter((c) => c.id !== consulta.id);
    this.buscarTratamiento(); // Actualiza la lista filtrada después de eliminar
  }

  modificarTratamiento(consulta: Consulta): void {
    // Implementa la lógica de modificar tratamiento aquí
  }
}
