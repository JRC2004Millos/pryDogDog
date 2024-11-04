import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { AdminUser } from '../model/adminUser';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private HttpClient: HttpClient) {}

  login(user: AdminUser): Observable<String> {
    return this.HttpClient.post('http://localhost:8080/admin/login', user, {
      responseType: 'text',
    });
  }
}
