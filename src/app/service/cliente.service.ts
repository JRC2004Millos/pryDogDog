import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

    findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/clientes/ver');
  }

  findById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:8080/clientes/ver/${id}');
  }

  deleteById(id: number){
    console.log(id);
    this.http.delete('http://localhost:8080/clientes/eliminar/' + id).subscribe();
  }

  addCliente(Cliente: Cliente){
    this.http.post('http://localhost:8080/clientes/agregar', Cliente).subscribe();
  }
}
