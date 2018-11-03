import { Contract } from './../../contract/models/contract';
import { Observable } from 'rxjs/Observable';
import { ContractService } from './../../contract/services/contract.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContractTableService {

  modelList: Contract[] = [];
  modelChannel = new Subject<Array<Contract>>();

  constructor(private service: ContractService) {
    this.service.getAll().subscribe((result) => {
      this.modelList = result;
      this.modelChannel.next(result);
    });
  }

  getActiveContracts(): Observable<Array<Contract>> {
    return this.modelChannel.asObservable();
  }

  // This can be optimized
  update(id: number) {
    // console.log('ActiveContractService Update');
    this.service.getById(id).subscribe((result) => {
      this.modelList.forEach((val, index) => {
        if (val._id === result._id) {
          this.modelList[index] = result;
        }
      });
      this.modelChannel.next(this.modelList);
    });
  }

}
