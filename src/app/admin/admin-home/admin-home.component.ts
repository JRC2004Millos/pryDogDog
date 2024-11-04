import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
