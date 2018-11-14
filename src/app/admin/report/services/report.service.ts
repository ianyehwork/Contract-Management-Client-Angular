import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../../auth/services/auth.service';
import { AppError } from '../../../shared/models/app-error';
import { BadInputError } from '../../../shared/models/bad-input-error';
import { NotFoundError } from '../../../shared/models/not-found-error';

// Environment variable to get server URL
import { environment } from '../../../../environments/environment';

@Injectable()
export class ReportService {

  url: string = environment.nodeServerURL;
  headers;

  constructor(public http: HttpClient,
              public authService: AuthService) {
    this.headers = this.authService.authHeader;
    this.headers['responseType'] = 'blob';
    this.headers['headers']['Accept'] = 'application/pdf';
  }

  public getPaymentReport(query: string = ''): Observable<any> {
    return this.http.get(this.url + '/reports/payments' + query, this.headers)
                    .catch(this.handleError);
  }

  public getIncomeReport(query: string = ''): Observable<any> {
    return this.http.get(this.url + '/reports/incomes' + query, this.headers)
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
