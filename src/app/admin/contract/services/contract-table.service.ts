import { Contract } from './../../contract/models/contract';
import { Observable } from 'rxjs/Observable';
import { ContractService } from './../../contract/services/contract.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContractTableService {

  modelList: Contract[] = [];
  modelChannel = new Subject<Array<Contract>>();

  constructor(private service: ContractService) { }

  getContracts(): Observable<Array<Contract>> {
    return this.modelChannel.asObservable();
  }

  updateAll() {
    this.service.getAll().subscribe((result) => {
      this.modelList = result;
      this.modelChannel.next(result);
    });
  }

  update(model: Contract) {
    this.modelList.forEach((val, index) => {
      if (val._id === model._id) {
        this.modelList[index] = model;
      }
    });
    this.modelChannel.next(this.modelList);
  }

}
