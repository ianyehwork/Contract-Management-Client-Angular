import { Injectable } from '@angular/core';

import { TableService } from '../../../shared/services/table.service';
import { Contract } from './../../contract/models/contract';
import { ContractService } from './../../contract/services/contract.service';

@Injectable()
export class PaymentCalendarService extends TableService<Contract, ContractService> {

  constructor(service: ContractService) {
    super(service);
    this.order = 'dateCreated';
    this.reverse = 1;
    this.field = '';
    this.match = '';
    this.page = 1;
    this.pageSize = 1000;
    this.customerFilterString = '&active=true';
  }

  add(model: Contract) {
    const updatedList = [];
    this.modelList.data.forEach((value) => {
      updatedList.push(value);
    });
    updatedList.push(model);
    this.modelList.data = updatedList;
    this.modelList.collectionSize++;
    this.modelChannel.next(this.modelList);
  }

  remove(model: Contract) {
    this.modelList.data = this.modelList.data.filter((value) => {
      return value._id !== model._id;
    });
    this.modelList.collectionSize++;
    this.modelChannel.next(this.modelList);
  }
}

