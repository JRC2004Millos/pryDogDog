import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8080/mascotas/ver');
  }

  findById(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(
      'http://localhost:8080/mascotas/buscar/' + id
    );
  }

  findClienteMascota(id: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(
      'http://localhost:8080/clientes/ver/' + id + '/mascotas'
    );
  }

  deleteById(id: number) {
    this.http
      .delete('http://localhost:8080/mascotas/eliminar/' + id)
      .subscribe();
  }

  addMascota(mascota: Mascota) {
    console.log(mascota); // Para verificar que el cliente está dentro de mascota
    return this.http.post<Mascota>('http://localhost:8080/mascotas/agregar', mascota);
  }

  updateMascota(mascota: Mascota) {
    return this.http.put<Mascota>('http://localhost:8080/mascotas/modificar', mascota);
  }
}
