import { VeterinarioService } from '../service/veterinario.service';
import { Veterinario } from '../model/veterinario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css'],
})
export class VeterinarioComponent implements OnInit {
  veterinario: Veterinario | undefined;

  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.veterinarioService.veterinarioHome().subscribe((data) => {
      this.veterinario = data;
    });

    // this.route.paramMap.subscribe(params => {
    //   const id = Number(params.get('id'));
    //   if (id) {
    //     this.veterinarioService.findById(id).subscribe(
    //       (data: Veterinario) => {
    //         this.veterinario = data;
    //       },
    //       (error) => {
    //         console.error('Error al obtener el veterinario', error);
    //       }
    //     );
    //   } else {
    //     console.error('ID de veterinario no válido en la URL');
    //   }
    // });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
