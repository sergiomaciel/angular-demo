export class User {
    static _id: number = 0;
    id: number;
    nombre: string;
    edad:number;
    activo: boolean = false;

    constructor (nombre: string) {
        this.nombre = nombre;
        this.id = User._id++;
    }
}