import { Cliente } from "./cliente";

export interface Mascota {
    id: number,
    nombre: string,
    raza: string,
    edad: number,
    peso: number,
    fotoURL: string,
    enfermedad: string,
    estado: boolean,
    cliente?: Cliente
}