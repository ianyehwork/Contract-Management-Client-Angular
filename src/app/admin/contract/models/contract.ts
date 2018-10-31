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
    eYear: number;
    eMonth: number;
    eDay: number;
    pFrequency: number;
    expectTotal: number;
    actualTotal: number;
    active: boolean;
    comment: string;
    dateCreated: string;
    dateModified: string;

    constructor() {
        this._id = 0;
        this._customer = new Customer();
        this._lot = new ParkingLot();
        this.sYear = 0;
        this.sMonth = 0;
        this.sDay = 0;
        this.eYear = 0;
        this.eMonth = 0;
        this.eDay = 0;
        this.pFrequency = 0;
        this.expectTotal = 0;
        this.actualTotal = 0;
        this.comment = '';
    }

    get id() {
        return this._id;
    }
}
