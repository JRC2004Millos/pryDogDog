import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>('http://localhost:8080/mascotas/ver');
  }

  findById(id: number): Observable<Mascota>{
    return this.http.get<Mascota>('http://localhost:8080/mascotas/ver/${id}');
  }

  deleteById(id: number){
    console.log(id);
    this.http.delete('http://localhost:8080/mascotas/eliminar/' + id).subscribe();
  }

  addMascota(mascota: Mascota){
    this.http.post('http://localhost:8080/mascotas/agregar', mascota).subscribe();
  }
}
