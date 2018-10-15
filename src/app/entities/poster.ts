import { Category } from './category';
import { HasIdInterface } from '../shared/models/has-id.interface';

export class Poster implements HasIdInterface {
    _id: number;
    title: string;
    description: string;
    category: string;
    startTime: string;
    endTime: string;
    location: string;
    url: string;

    constructor() {
        this._id = 0;
        this.title = '';
        this.description = '';
        this.category = '';
        this.startTime = '';
        this.endTime = '';
        this.location = '';
        this.url = '';
    }

    get id() {
        return this._id;
    }
}
