import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pryDogDog';

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
