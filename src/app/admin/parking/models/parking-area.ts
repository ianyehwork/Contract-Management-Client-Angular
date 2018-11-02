import { HasIdInterface } from '../../../shared/models/has-id.interface';

export class ParkingArea implements HasIdInterface {
    _id: number;
    identifier: string;
    address: string;
    defaultDeposit: number;
    defaultRent: number;
    comment: string;
    dateCreated: string;
    dateModified: string;

    constructor() {
        this._id = 0;
        this.identifier = '';
        this.address = '';
        this.comment = '';
    }

    get id() {
        return this._id;
    }
}
