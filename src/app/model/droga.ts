import { Consulta } from './consulta';

export interface Droga {
  id: number;
  nombre: string;
  precioCompra: number;
  precioVenta: number;
  unidadesVendidas: number;
  unidadesDisponibles: number;
  consulta?: Consulta[]; // Lista opcional de consultas asociadas a la droga
}
