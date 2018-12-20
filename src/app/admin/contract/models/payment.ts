import { HasIdInterface } from '../../../shared/models/has-id.interface';

export class Payment implements HasIdInterface {
    _id: number;
    _contract: number;
    type: string;
    amount: number;
    comment: string;
    dateCreated: string;

    constructor() {
        this._id = 0;
        this._contract = 0;
        this.type = 'R';
        this.amount = undefined;
        this.comment = '';
    }

    get id() {
        return this._id;
    }
}
