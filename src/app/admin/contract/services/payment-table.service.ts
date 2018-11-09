import { Injectable } from '@angular/core';

import { TableService } from '../../../shared/services/table.service';
import { Payment } from '../models/payment';
import { PaymentService } from './payment.service';

@Injectable()
export class PaymentTableService extends TableService<Payment, PaymentService> {

  constructor(service: PaymentService) {
    super(service);
  }

}

