/**
 * foro.ts
 * Modelo del foro, que contiene los datos que debe tener un comentario a guardarse en la base de datos
 */

export class ForoModel {
    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any
    ) { }
}