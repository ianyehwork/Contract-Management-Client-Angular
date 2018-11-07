import { Injectable } from '@angular/core';

import { TableService } from '../../../shared/services/table.service';
import { Customer } from './../models/customer';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerTableService extends TableService<Customer, CustomerService> {

  constructor(service: CustomerService) {
    super(service);
  }

}
