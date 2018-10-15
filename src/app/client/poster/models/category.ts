import { HasIdInterface } from '../../../shared/models/has-id.interface';

export class Category implements HasIdInterface {
    _id: number;
    categoryName: string;

    constructor(id?, name?) {
        if (id && name) {
            this._id = id;
            this.categoryName = name;
        } else {
            this._id = 0;
            this.categoryName = '';
        }
    }

    get id() {
        return this._id;
    }
}
