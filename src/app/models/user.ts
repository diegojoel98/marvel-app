/**
 * foro.ts
 * Modelo de usuario, que contiene los datos que debe tener un usuario y con los que se guarda en la DB
 */

export class UserModel {
    constructor(
        public _id: string,
        public nombre: string,
        public surname: string,
        public email: string,
        public password: string
    ) { }
}