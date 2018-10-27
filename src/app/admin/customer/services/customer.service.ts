import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../shared/services/data.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Injectable } from '@angular/core';
// Environment variable to get server URL
import { environment } from '../../../../environments/environment';
// Model
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService extends DataService <Customer> {
  constructor(http: HttpClient, authService: AuthService) {
    super(environment.nodeServerURL + '/customers', http, authService);
  }
}
