import { Component } from '@angular/core';
import { Consulta } from 'src/app/model/consulta';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-mostrar-tratamientos',
  templateUrl: './mostrar-tratamientos.component.html',
  styleUrls: ['./mostrar-tratamientos.component.css'],
})
export class MostrarTratamientosComponent {
  listaConsultas!: Consulta[];
  consulta!: Consulta;

  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {
    this.consultaService.findAll().subscribe((consultas) => {
      this.listaConsultas = consultas;
    });
  }

  eliminarTratamiento(consulta: Consulta) {}

  modificarTratamiento(consulta: Consulta) {}
}
