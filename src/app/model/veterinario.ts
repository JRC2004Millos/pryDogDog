import { Consulta } from './consulta';

export interface Veterinario {
  id: number;
  nombre: string;
  cedula: number;
  clave: string;
  especialidad: string;
  fotoURL: string;
  numAtenciones: number;
  consulta?: Consulta[]; // Relación opcional con las consultas del veterinario
}