import { HasIdInterface } from '../../../shared/models/has-id.interface';

export class ParkingArea implements HasIdInterface {
    _id: number;
    identifier: string;
    address: string;
    defaultDeposit: number;
    defaultRent: number;
    comment: string;

    constructor() {
        this._id = 0;
        this.identifier = '';
        this.address = '';
        this.defaultDeposit = 0;
        this.defaultRent = 0;
        this.address = '';
    }

    get id() {
        return this._id;
    }
}
