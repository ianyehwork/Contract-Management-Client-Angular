import { HasIdInterface } from '../../../shared/models/has-id.interface';
import { Customer } from '../../customer/models/customer';
import { ParkingLot } from '../../parking/models/parking-lot';

export class Contract implements HasIdInterface {
    _id: number;
    _customer: Customer;
    _lot: ParkingLot;
    sYear: number;
    sMonth: number;
    sDay: number;
    pFrequency: number;
    comment: string;
    active: boolean;
    pTotal: number;
    dateCreated: string;
    dateModified: string;

    constructor() {
        this._id = 0;
        this._customer = new Customer();
        this._lot = new ParkingLot();
        this.sYear = 0;
        this.sMonth = 0;
        this.sDay = 0;
        this.pFrequency = 0;
        this.comment = '';
        this.pTotal = 0;
    }

    get id() {
        return this._id;
    }
}
