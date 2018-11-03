import { Component, OnInit } from '@angular/core';
import { Contract } from '../../../contract/models/contract';
import { ActiveContractService } from '../../services/active-contract.service';


@Component({
  selector: 'app-active-payment-table',
  templateUrl: './active-payment-table.component.html',
  styleUrls: ['./active-payment-table.component.css']
})
export class ActivePaymentTableComponent implements OnInit {

  modelList: Contract[] = [];

  constructor(private service: ActiveContractService) { }

  ngOnInit() {
    this.service.getActiveContracts().subscribe(contracts => {
        this.modelList = contracts;
      }
    );
  }

}
