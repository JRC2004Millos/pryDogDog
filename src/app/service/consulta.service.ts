import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../model/consulta';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>('http://localhost:8080/consultas');
  }

  findById(id: number): Observable<Consulta> {
    return this.http.get<Consulta>('http://localhost:8080/consultas/' + id);
  }

  deleteById(id: number) {
    return this.http.delete('http://localhost:8080/consultas/borrar' + id);
  }

  add(consulta: Consulta) {
    console.log(consulta);
    return this.http.post('http://localhost:8080/consultas/agregar', consulta);
  }

  update(consulta: Consulta) {
    return this.http.put('http://localhost:8080/consultas/modificar', consulta);
  }
}
