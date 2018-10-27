import { HasIdInterface } from '../../../shared/models/has-id.interface';

export class Customer implements HasIdInterface {
    _id: number;
    pContact: string;
    sContact: string;
    pPhone: string;
    sPhone: string;
    address: string;
    vehicles: string[];
    dateCreated: string;
    dateModified: string;

    constructor() {
        this._id = 0;
        this.pContact = '';
        this.sContact = '';
        this.pPhone = '';
        this.sPhone = '';
        this.address = '';
        this.vehicles = [];
    }

    get id() {
        return this._id;
    }
}
