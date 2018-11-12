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
  customerFilterString = '';

  constructor(public service: T2) {
  }

  /**
   * Return the observable of the subject
   */
  getModelChannel(): Observable<{data: T1[], collectionSize: number}> {
    return this.modelChannel.asObservable();
  }

  /**
   * Save the query parameters and fetch the data
   * from the server
   * @param field
   * @param match
   * @param order
   * @param reverse
   * @param page
   * @param pageSize
   */
  refresh(field: string,
          match: string,
          order: string,
          reverse: number,
          page: number,
          pageSize: number) {
    // Retain the last refresh values
    this.field = field;
    this.match = match;
    this.order = order;
    this.reverse = reverse;
    this.page = page;
    this.pageSize = pageSize;

    this.fetchData();
  }

  /**
   * Perform in-memory update instead of re-fetching
   * the data from the server.
   * @param model updated model
   */
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

  /**
   * Set custom filter string
   * @param customerFilterString '&{key}={value}'
   */
  setCustomFilter(customerFilterString: string) {
    this.customerFilterString = customerFilterString;
  }

  /**
   * Clear custom filter string
   */
  clearCustomFilter() {
    this.customerFilterString = '';
  }

  /**
   * Fetch the data from the server
   */
  fetchData() {
    this.service.getAll(this.buildQuery()).subscribe((result) => {
      this.modelList = result;
      this.modelChannel.next(result);
    });
  }

  /**
   * Build URL query parameter to pass to the server
   */
  private buildQuery() {
    let query = '?';
    query += 'field=' + this.field;
    query += '&match=' + this.match;
    query += '&order=' + this.order;
    query += '&reverse=' + this.reverse;
    query += '&page=' + this.page;
    query += '&pageSize=' + this.pageSize;
    query += this.customerFilterString;
    return query;
  }
}
