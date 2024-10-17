import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { MascotaService } from 'src/app/service/mascota.service';
import { DrogaService } from 'src/app/service/droga.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  kpis = [
    { title: 'Tratamientos Administrados Último Mes', value: 38 }
  ];

  constructor(
    private veterinarioService: VeterinarioService,
    private mascotaService: MascotaService,
    private drogaService: DrogaService
  ) {}

  ngOnInit(): void {
    this.cargarVeterinariosActivosInactivos();
    this.cargarMascotasKPIs();
    this.cargarVentasGanancias();
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
        this.kpis.push({ title: 'Veterinarios Inactivos', value: data.inactivos });
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
        this.kpis.push({ title: 'Mascotas en Tratamiento', value: enTratamiento });
      },
      (error) => {
        console.error('Error al cargar mascotas en tratamiento:', error);
      }
    );
  }

  createBarChart(): void {
    const ctx = document.getElementById('comparativaVeterinariosBar') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Veterinario A', 'Veterinario B', 'Veterinario C', 'Veterinario D'],
        datasets: [
          {
            label: 'Número de Atenciones',
            data: [200, 150, 180, 220],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 206, 86, 0.6)',
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
  }
}
