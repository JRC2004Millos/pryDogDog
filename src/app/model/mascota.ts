import { Cliente } from './cliente';
import { Consulta } from './consulta';

export interface Mascota {
  consultas?: Consulta[];
  id: number;
  nombre: string;
  raza: string;
  edad: number;
  peso: number;
  fotoURL: string;
  enfermedad: string;
  estado: boolean;
  cliente?: Cliente;
}
