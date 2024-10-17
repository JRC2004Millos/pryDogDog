import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/clientes/ver');
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8080/clientes/ver/' + id);
  }

  deleteById(id: number): Observable<any> {
    console.log(id);
    return this.http.delete('http://localhost:8080/clientes/eliminar/' + id);
  }

  addCliente(Cliente: Cliente) {
    return this.http.post('http://localhost:8080/clientes/agregar', Cliente);
  }

  findByCedula(cedula: number): Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8080/clientes/cedula/' + cedula);
  }

  updateCliente(cliente: Cliente){
    console.log(cliente);
    return this.http.put<Cliente>('http://localhost:8080/clientes/modificar', cliente);
  }
}