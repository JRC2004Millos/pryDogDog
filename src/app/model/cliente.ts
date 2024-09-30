import { Mascota } from "../model/mascota"

export interface Cliente {
    id: number,
    nombre: string,
    cedula: number,
    email: string,
    celular: number,
    mascotas?: Mascota[]
}