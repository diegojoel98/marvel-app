export class UserModel {
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public email: string,
        public password: string
    ) { }
}