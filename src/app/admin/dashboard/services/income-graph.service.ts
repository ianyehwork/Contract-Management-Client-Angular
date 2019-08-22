import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../../auth/services/auth.service';
import { AppError } from '../../../shared/models/app-error';
import { BadInputError } from '../../../shared/models/bad-input-error';
import { NotFoundError } from '../../../shared/models/not-found-error';
import { UnauthorizeError } from '../../../shared/models/unauthorize-error';

// Environment variable to get server URL
import { environment } from '../../../../environments/environment';

@Injectable()
export class IncomeGraphService {

  url: string = environment.nodeServerURL;
  headers;

  constructor(public http: HttpClient,
              public authService: AuthService) {
      this.headers = this.authService.authHeader;
  }

  public getPaymentSummary(): Observable<any> {
    return this.http.get(this.url + '/payments/summary', this.headers)
                    .catch(this.handleError);
  }

  public handleError(error: Response) {
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
