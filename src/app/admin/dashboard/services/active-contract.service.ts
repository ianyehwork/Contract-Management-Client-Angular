import { Contract } from './../../contract/models/contract';
import { Observable } from 'rxjs/Observable';
import { ContractService } from './../../contract/services/contract.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ActiveContractService {

  modelList: Contract[] = [];
  modelChannel = new Subject<Array<Contract>>();

  constructor(private service: ContractService) {
    this.update();
  }

  getActiveContracts(): Observable<Array<Contract>> {
    return this.modelChannel.asObservable();
  }

  update() {
    // console.log('ActiveContractService Update');
    this.service.getAll(`?active=1`).subscribe((result) => {
      this.modelChannel.next(result);
    });
  }

}
