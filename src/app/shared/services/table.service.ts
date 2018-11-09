import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HasIdInterface } from '../models/has-id.interface';
import { DataService } from './data.service';

@Injectable()
export class TableService<T1 extends HasIdInterface, T2 extends DataService<T1>> {

  modelList: {data: T1[], collectionSize: number} = {data: [], collectionSize: 0};
  modelChannel = new Subject<{data: T1[], collectionSize: number}>();

  constructor(public service: T2) {
  }

  getModelChannel(): Observable<{data: T1[], collectionSize: number}> {
    return this.modelChannel.asObservable();
  }

  refresh() {
    this.service.getAll().subscribe((result) => {
      this.modelList = result;
      this.modelChannel.next(result);
    });
  }

  update(model: T1) {
    const updatedList = [];
    this.modelList.data.forEach((val, index) => {
      if (val._id === model._id) {
        this.modelList[index] = model;
      }
      updatedList.push(this.modelList[index]);
    });
    this.modelList.data = updatedList;
    this.modelChannel.next(this.modelList);
  }

  delete(model: T1) {
    this.modelList.data = this.modelList.data.filter((item) => {
      if (item._id !== model._id) {
        return item;
      }
    });
    this.modelChannel.next(this.modelList);
  }

  add(model: T1) {
    const updatedList = [];
    this.modelList.data.forEach((value, index) => {
      updatedList.push(this.modelList[index]);
    });
    updatedList.push(model);
    this.modelList.data = updatedList;
    this.modelChannel.next(this.modelList);
  }

  notify() {
    this.modelChannel.next(this.modelList);
  }
}
