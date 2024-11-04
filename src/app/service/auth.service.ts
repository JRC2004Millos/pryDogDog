import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';
  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  login(user: User): Observable<String> {
    return this.http.post('http://localhost:8080/admin/login', user, {
      responseType: 'text',
    });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role || null; // Aquí se obtiene el rol
    }
    return null;
  }

  logout(): void {
    this.clearToken();
  }
}
