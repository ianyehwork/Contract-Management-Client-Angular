import { HasIdInterface } from '../../shared/models/has-id.interface';

export class User implements HasIdInterface {
    _id: number;
    username: String;
    email: String;
    password: String;
    token: String;

    constructor() {
       this._id = 0;
       this.username = '';
       this.email = '';
       this.password = '';
       this.token = '';
    }

    get id() {
        return this._id;
    }
}
