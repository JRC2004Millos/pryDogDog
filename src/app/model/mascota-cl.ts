export class MascotaCL {
    public nombre: string;
    public raza: string;
    public edad: number;
    public peso: number;
    public fotoURL: string;
    public enfermedad: string;
    public estado: boolean;

    constructor(
        nombre: string,
        raza: string,
        edad: number,
        peso: number,
        fotoURL: string,
        enfermedad: string,
        estado: boolean
    ) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.peso = peso;
        this.fotoURL = fotoURL;
        this.enfermedad = enfermedad;
        this.estado = estado;
    }
}
