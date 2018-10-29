import { HasIdInterface } from '../../../shared/models/has-id.interface';

export class ParkingLot implements HasIdInterface {
    _id: number;
    _area: number;
    identifier: string;
    deposit: number;
    rent: number;
    comment: string;
    status: string;
    dateCreated: string;
    dateModified: string;

    constructor() {
        this._id = 0;
        this.identifier = '';
        this.deposit = 0;
        this.rent = 0;
        this.comment = '';
        this.status = '';
    }

    get id() {
        return this._id;
    }
}
