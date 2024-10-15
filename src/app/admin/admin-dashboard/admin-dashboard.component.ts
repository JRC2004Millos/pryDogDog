import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';  // Asegúrate de importar ChartType

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent {
  public barChartOptions = {
    responsive: true,
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  /*-------------------------------------GRAFICO DE BARRAS---------------------------------*/ 
   // Etiquetas del gráfico (eje X)
   public barChartLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

   // Tipo de gráfico
   public barChartType: ChartType = 'bar';  // Asegúrate de usar ChartType
   public barChartLegend = true;
 
   // Datos del gráfico
   public barChartData = [
     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ventas' },
     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Gastos' }
   ];
 
   // Colores para las barras
   public barChartColors = [
     { backgroundColor: 'rgba(75, 192, 192, 0.6)', borderColor: 'rgba(75, 192, 192, 1)' },
     { backgroundColor: 'rgba(153, 102, 255, 0.6)', borderColor: 'rgba(153, 102, 255, 1)' }
   ];

  /*-------------------------------------GRAFICO DE TORTA---------------------------------*/ 

   // Cambiamos el tipo de gráfico a ChartType
   public pieChartType: ChartType = 'pie';  // Asegúrate de que sea del tipo correcto

   // Asignamos las etiquetas directamente en pieChartData
   public pieChartData: ChartData<'pie', number[], string | string[]> = {
      labels: ['Ventas', 'Gastos', 'Ganancias'],  // Asignamos directamente las etiquetas aquí
      datasets: [{
        data: [300, 500, 200],  // Asegúrate de que es un array dentro de datasets
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      }]
   };
}
