import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import { BadInputError } from '../models/bad-input-error';
import { NotFoundError } from '../models/not-found-error';
import { AppError } from '../models/app-error';

import { HasIdInterface } from '../models/has-id.interface';
import { AuthService } from '../../auth/services/auth.service';

/**
 * This class is the based class for http service that has CRUD operation.
 * @author Tsu-Hsin Yeh
 */
@Injectable()
export class DataService <T extends HasIdInterface> {

  constructor(public url: string,
              public http: HttpClient,
              public authService: AuthService) {}

  public getAll(): Observable<T[]> {
    return this.http.get(this.url, this.authService.authHeader)
                    .catch(this.handleError);
  }

  public getById(id: number): Observable<T> {
    return this.http.get(this.url + '/' + id, this.authService.authHeader)
                    .catch(this.handleError);
  }

  public create(resource: T): Observable<T> {
    return this.http.post(this.url, resource, this.authService.authHeader)
                    .catch(this.handleError);
  }

  public update(resource: T): Observable<T> {
    return this.http.patch(this.url + '/' + resource._id, resource, this.authService.authHeader)
                    .catch(this.handleError);
  }

  public delete(resource: T): Observable<T> {
    return this.http.delete(this.url + '/' + resource._id, this.authService.authHeader)
                    .catch(this.handleError);
  }

  public handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    } else if (error.status === 400) {
      return Observable.throw(new BadInputError(error));
    } else {
      return Observable.throw(new AppError(error));
    }
  }
}
