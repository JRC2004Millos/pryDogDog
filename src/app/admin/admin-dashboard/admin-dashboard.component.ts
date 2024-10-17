import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { MascotaService } from 'src/app/service/mascota.service';
import { DrogaService } from 'src/app/service/droga.service';
import { ConsultaService } from 'src/app/service/consulta.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  kpis: { title: string; value: number | string }[] = [];
  cant_tratamientos: { nombre: string; cantidad: number }[] = [];

  constructor(
    private veterinarioService: VeterinarioService,
    private mascotaService: MascotaService,
    private drogaService: DrogaService,
    private consultaService: ConsultaService
  ) {}

  ngOnInit(): void {
    this.cargarVeterinariosActivosInactivos();
    this.cargarTratamientosUltimoMes();
    this.cargarMascotasKPIs();
    this.cargarVentasGanancias();
    this.cargarTratamientosPorDroga();
    this.createBarChart();
  }

  cargarVentasGanancias(): void {
    this.drogaService.getGananciasTotales().subscribe(
      (ganancias) => {
        this.kpis.push({ title: 'Ganancias Totales', value: ganancias });
      },
      (error) => {
        console.error('Error al cargar ganancias totales:', error);
      }
    );

    this.drogaService.getVentasTotales().subscribe(
      (ventas) => {
        this.kpis.push({ title: 'Ventas Totales', value: ventas });
      },
      (error) => {
        console.error('Error al cargar ventas totales:', error);
      }
    );
  }

  cargarVeterinariosActivosInactivos(): void {
    this.veterinarioService.getActivosInactivos().subscribe(
      (data) => {
        this.kpis.push({ title: 'Veterinarios Activos', value: data.activos });
        this.kpis.push({
          title: 'Veterinarios Inactivos',
          value: data.inactivos,
        });
      },
      (error) => {
        console.error('Error al cargar datos de veterinarios:', error);
      }
    );
  }

  cargarMascotasKPIs(): void {
    this.mascotaService.getTotalMascotas().subscribe(
      (total) => {
        this.kpis.push({ title: 'Total de Mascotas', value: total });
      },
      (error) => {
        console.error('Error al cargar el total de mascotas:', error);
      }
    );

    this.mascotaService.getMascotasEnTratamiento().subscribe(
      (enTratamiento) => {
        this.kpis.push({
          title: 'Mascotas en Tratamiento',
          value: enTratamiento,
        });
      },
      (error) => {
        console.error('Error al cargar mascotas en tratamiento:', error);
      }
    );
  }

  cargarTratamientosPorDroga(): void {
    this.consultaService.getTratamientosPorDroga().subscribe(
      (data: [string, number][]) => {
        this.cant_tratamientos = data.map((item: [string, number]) => ({
          nombre: item[0], // Nombre del medicamento
          cantidad: item[1], // Cantidad de tratamientos
        }));
      },
      (error) => {
        console.error('Error al cargar tratamientos por droga:', error);
      }
    );
  }

  cargarTratamientosUltimoMes(): void {
    this.consultaService.getTratamientosUltimoMes().subscribe(
      (total: number) => {
        this.kpis.push({
          title: 'Tratamientos Administrados Último Mes',
          value: total,
        });
      },
      (error) => {
        console.error('Error al cargar tratamientos del último mes:', error);
      }
    );
  }

  createBarChart(): void {
    this.drogaService.getTopTratamientos().subscribe(
      (data) => {
        const labels = data.map((item) => item[0]); // Nombres de los tratamientos
        const values = data.map((item) => item[1]); // Unidades vendidas

        const ctx = document.getElementById(
          'top3_tratamientos'
        ) as HTMLCanvasElement;
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Unidades Vendidas',
                data: values,
                backgroundColor: [
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                ],
              },
            ],
          },
          options: {
            responsive: true,
            scales: { y: { beginAtZero: true } },
          },
        });
      },
      (error) => {
        console.error('Error al cargar el top 3 de tratamientos:', error);
      }
    );
  }
}