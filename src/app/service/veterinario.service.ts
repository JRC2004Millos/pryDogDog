import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../model/veterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VeterinarioService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(
      'http://localhost:8080/veterinario/ver'
    );
  }

  findById(id: number): Observable<Veterinario> {
    return this.http.get<Veterinario>(
      'http://localhost:8080/veterinario/' + id
    );
  }

  deleteById(id: number) {
    console.log(id);
    this.http
      .delete('http://localhost:8080/veterinario/eliminar/' + id)
      .subscribe();
  }

  add(veterinario: Veterinario) {
    console.log(veterinario);
    return this.http
      .post('http://localhost:8080/veterinario/agregar', veterinario);
  }

  findByCedula(cedula: number): Observable<Veterinario> {
    return this.http.get<Veterinario>(
      'http://localhost:8080/veterinario/cedula/' + cedula
    );
  }

  update(veterinario: Veterinario) {
    return this.http.put<Veterinario>(
      'http://localhost:8080/veterinario/modificar',
      veterinario
    );
  }
  
  // NUEVO MÉTODO PARA OBTENER ACTIVOS E INACTIVOS
  getActivosInactivos(): Observable<{ activos: number; inactivos: number }> {
    return this.http.get<{ activos: number; inactivos: number }>(
      'http://localhost:8080/veterinario/activosInactivos'
    );
  }
}
