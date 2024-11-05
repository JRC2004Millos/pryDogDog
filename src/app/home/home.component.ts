import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService) {}

  images = [
    {
      imageSrc: 'assets/images/ConsultaGeneral.jpg',
      imageAlt: 'Consulta General',
    },
    {
      imageSrc: 'assets/images/Desparasitacion.jpg',
      imageAlt: 'Desparacitación',
    },
    { imageSrc: 'assets/images/Eutanasia.jpg', imageAlt: 'Eutanasia' },
    { imageSrc: 'assets/images/PerroCono.jpg', imageAlt: 'Cono' },
    { imageSrc: 'assets/images/VacunaPerro.jpg', imageAlt: 'Vacuna' },
  ];

  services = [
    { services: 'Consulta General' },
    { services: 'Desparacitación' },
    { services: 'Eutanasia' },
    { services: 'Esterilización' },
    { services: 'Vacunación' },
  ];

  ngOnInit(): void {
    console.log(this.authService.getUserRole());
    // Verifica si el usuario ya tiene un token y un rol válido
    if (this.authService.isLoggedIn()) {
      const role = this.authService.getUserRole();
      if (role === 'VETERINARIO') {
        this.router.navigate(['/veterinario']);
      } else if (role === 'CLIENTE') {
        this.router.navigate(['/cliente']);
      } else if (role === 'ADMIN') {
        this.router.navigate(['/admin']);
      }
    }
  }
}
