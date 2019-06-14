import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BadInputError } from '../models/bad-input-error';
import { NotFoundError } from '../models/not-found-error';
import { UnauthorizeError } from '../models/unauthorize-error';
import { AppError } from '../models/app-error';

/**
 * This class is the based class for http service that only has get/fetch operation.
 * @author Tsu-Hsin Yeh
 */
@Injectable()
export class ConstantsService <T> {

    constructor(private url: string, private http: HttpClient) {}

    fetchAll(): Observable<T[]> {
        return this.http.get(this.url)
                        .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        } else if (error.status === 400) {
            return Observable.throw(new BadInputError(error));
        } else if (error.status === 401) {
            return Observable.throw(new UnauthorizeError(error));
        } else {
            return Observable.throw(new AppError(error));
        }
    }
}
