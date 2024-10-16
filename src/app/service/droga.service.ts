import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Droga } from '../model/droga';

@Injectable({
  providedIn: 'root',
})
export class DrogaService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Droga[]> {
    return this.http.get<Droga[]>('http://localhost:8080/drogas/ver');
  }

  findById(id: number): Observable<Droga> {
    return this.http.get<Droga>('http://localhost:8080/drogas/ver/' + id);
  }

  deleteById(id: number) {
    return this.http.delete('http://localhost:8080/drogas/ver/' + id);
  }

  // addDroga(droga: Droga) {
  //   return this.http.post('http://localhost:8080/drogas/crear', droga);
  // }

  updateDroga(droga: Droga) {
    return this.http.put('http://localhost:8080/drogas/modificar', droga);
  }
}
