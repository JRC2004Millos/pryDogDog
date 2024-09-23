import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { imageSrc: 'assets/images/ConsultaGeneral.jpg', imageAlt: 'Consulta General' },
    { imageSrc: 'assets/images/Desparasitacion.jpg', imageAlt: 'Desparacitación' },
    { imageSrc: 'assets/images/Eutanasia.jpg', imageAlt: 'Eutanasia' },
    { imageSrc: 'assets/images/PerroCono.jpg', imageAlt: 'Cono' },
    { imageSrc: 'assets/images/VacunaPerro.jpg', imageAlt: 'Vacuna' }
  ];

  services = [
    { services: 'Consulta General' },
    { services: 'Desparacitación' },
    { services: 'Eutanasia' },
    { services: 'Esterilización' },
    { services: 'Vacunación' }
  ];
}
