import { Consulta } from './consulta';

export interface Veterinario {
  id: number;
  nombre: string;
  cedula: number;
  clave: string;
  confirmarClave?: string;
  especialidad: string;
  fotoURL: string;
  estado: boolean;
}
