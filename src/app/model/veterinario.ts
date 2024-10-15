import { Consulta } from './consulta';

export interface Veterinario {
  id: number;
  nombre: string;
  cedula: number;
  clave: string;
  especialidad: string;
  fotoURL: string;
}
