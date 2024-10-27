import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  message: string = ''; // Inicialización como cadena vacía

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.message = params.get('message') || 'Ocurrió un error inesperado.';
    });
  }

  volverInicio(): void {
    this.router.navigate(['/login']); // Redirige al inicio o a otra ruta deseada
  }
}
