import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../shared/services/data.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Injectable } from '@angular/core';
// Environment variable to get server URL
import { environment } from '../../../../environments/environment';
// Model
import { Contract } from '../models/contract';

@Injectable()
export class ContractService extends DataService <Contract> {
  constructor(http: HttpClient, authService: AuthService) {
    super(environment.nodeServerURL + '/contracts', http, authService);
  }
}
