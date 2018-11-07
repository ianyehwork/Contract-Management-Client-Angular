import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Customer } from './../models/customer';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerTableService {

  modelList: Customer[] = [];
  modelChannel = new Subject<Array<Customer>>();

  constructor(private service: CustomerService) { }

  getModelChannel(): Observable<Array<Customer>> {
    return this.modelChannel.asObservable();
  }

  refresh() {
    this.service.getAll().subscribe((result) => {
      this.modelList = result;
      this.modelChannel.next(result);
    });
  }

  update(model: Customer) {
    const updatedList = [];
    this.modelList.forEach((val, index) => {
      if (val._id === model._id) {
        this.modelList[index] = model;
      }
      updatedList.push(this.modelList[index]);
    });
    this.modelList = updatedList;
    this.modelChannel.next(this.modelList);
  }

  delete(model: Customer) {
    this.modelList = this.modelList.filter((item) => {
      if (item._id !== model._id) {
        return item;
      }
    });
    this.modelChannel.next(this.modelList);
  }

  add(model: Customer) {
    const updatedList = [];
    this.modelList.forEach((value, index) => {
      updatedList.push(this.modelList[index]);
    });
    updatedList.push(model);
    this.modelList = updatedList;
    this.modelChannel.next(this.modelList);
  }
}
