import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HasIdInterface } from '../models/has-id.interface';
import { DataService } from './data.service';

@Injectable()
export class TableService<T1 extends HasIdInterface, T2 extends DataService<T1>> {

  modelList: {data: T1[], collectionSize: number} = {data: [], collectionSize: 0};
  modelChannel = new Subject<{data: T1[], collectionSize: number}>();

  // Retain the information since the
  // last refresh operation
  order;
  reverse;
  field;
  match;
  page;
  pageSize;

  constructor(public service: T2) {
  }

  getModelChannel(): Observable<{data: T1[], collectionSize: number}> {
    return this.modelChannel.asObservable();
  }

  refresh(field: string,
          match: string,
          order: string,
          reverse: boolean,
          page: number,
          pageSize: number) {
    // Retain the last refresh values
    this.field = field;
    this.match = match;
    this.order = order;
    this.reverse = reverse;
    this.page = page;
    this.pageSize = pageSize;

    this.service.getAll(this.buildQuery()).subscribe((result) => {
      this.modelList = result;
      this.modelChannel.next(result);
    });
  }

  update(model: T1) {
    const updatedList = [];
    this.modelList.data.forEach((val, index) => {
      if (val._id === model._id) {
        this.modelList.data[index] = model;
      }
      updatedList.push(this.modelList.data[index]);
    });
    this.modelList.data = updatedList;
    this.modelChannel.next(this.modelList);
  }

  // TODO: Remove the model parameter
  delete(model: T1) {
    this.service.getAll(this.buildQuery()).subscribe((result) => {
      this.modelList = result;
      this.modelChannel.next(result);
    });
  }

  // TODO: Remove the model parameter
  add(model: T1) {
    this.service.getAll(this.buildQuery()).subscribe((result) => {
      this.modelList = result;
      this.modelChannel.next(result);
    });
  }

  notify() {
    this.modelChannel.next(this.modelList);
  }

  private buildQuery() {
    let query = '?';
    query += 'field=' + this.field;
    query += '&match=' + this.match;
    query += '&order=' + this.order;
    query += '&reverse=' + this.reverse;
    query += '&page=' + this.page;
    query += '&pageSize=' + this.pageSize;
    return query;
  }
}
