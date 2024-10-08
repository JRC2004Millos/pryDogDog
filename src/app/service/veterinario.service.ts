import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../model/veterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>('http://localhost:8080/veterinario');
  }

  findById(id: number): Observable<Veterinario> {
    return this.http.get<Veterinario>('http://localhost:8080/veterinario/' + id);
  }

  deleteById(id: number) {
    console.log(id);
    this.http.delete('http://localhost:8080/veterinario/eliminar/' + id).subscribe();
  }

  add(veterinario: Veterinario) {
    this.http.post('http://localhost:8080/veterinario/agregar', veterinario).subscribe();
  }

  findByCedula(cedula: number): Observable<Veterinario> {
    return this.http.get<Veterinario>('http://localhost:8080/veterinario/cedula/' + cedula);
  }


  update(veterinario: Veterinario): Observable<Veterinario> {
    return this.http.put<Veterinario>(`http://localhost:8080/veterinario/modificar/${veterinario.id}`, veterinario);
  }
}