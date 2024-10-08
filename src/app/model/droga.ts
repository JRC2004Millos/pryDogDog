import { Consulta } from './consulta';

export interface Droga {
  id: number;
  nombre: string;
  descripcion: string;
  consulta?: Consulta[]; // Lista opcional de consultas asociadas a la droga
}