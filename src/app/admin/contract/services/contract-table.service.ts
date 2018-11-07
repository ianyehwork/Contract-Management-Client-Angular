import { Injectable } from '@angular/core';

import { TableService } from '../../../shared/services/table.service';
import { Contract } from './../../contract/models/contract';
import { ContractService } from './../../contract/services/contract.service';

@Injectable()
export class ContractTableService extends TableService<Contract, ContractService> {

  constructor(service: ContractService) {
    super(service);
  }

}

