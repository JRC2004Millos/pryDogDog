import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  kpis = [
    { title: 'Tratamientos Administrados Último Mes', value: 38 },
    { title: 'Veterinarios Activos', value: 5 },
    { title: 'Veterinarios Inactivos', value: 2 },
    { title: 'Total de Mascotas', value: 120 },
    { title: 'Mascotas en Tratamiento', value: 25 },
    { title: 'Ventas Totales', value: '$5,000,000' },
    { title: 'Ganancias Totales', value: '$2,500,000' }
  ];

  ngOnInit(): void {
    this.createDoughnutChart();
    this.createLineChart();
    this.createBarChart();
  }

  createDoughnutChart() {
    const ctx = document.getElementById('tratamientosDoughnut') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Vacunaciones', 'Castraciones', 'Consultas Generales'],
        datasets: [{
          data: [30, 20, 50],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        }
      }
    });
  }

  createLineChart() {
    const ctx = document.getElementById('evolucionCitasLine') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Citas por Mes',
          data: [50, 60, 80, 90, 110, 150],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  createBarChart() {
    const ctx = document.getElementById('comparativaVeterinariosBar') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Veterinario A', 'Veterinario B', 'Veterinario C', 'Veterinario D'],
        datasets: [{
          label: 'Número de Atenciones',
          data: [200, 150, 180, 220],
          backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(54, 162, 235, 0.6)']
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }
}
