export class UserModel {
    constructor(
        public _id: string,
        public nombre: string,
        public surname: string,
        public email: string,
        public password: string
    ) { }
}