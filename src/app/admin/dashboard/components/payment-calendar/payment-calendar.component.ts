import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Contract } from '../../../contract/models/contract';
import { ActiveContractService } from '../../services/active-contract.service';

@Component({
  selector: 'app-payment-calendar',
  templateUrl: './payment-calendar.component.html',
  styleUrls: ['./payment-calendar.component.css']
})
export class PaymentCalendarComponent implements OnInit {

  model: NgbDateStruct;
  modelList: Contract[] = [];
  map: Map<string, Array<string>>;

  constructor(private service: ActiveContractService) { }

  ngOnInit() {
    this.service.getActiveContracts().subscribe(contracts => {
      this.modelList = contracts;
      this.map = new Map();
      for (let i = 0; i < this.modelList.length; i++) {
        const model = this.modelList[i];
        let array = this.map.get(model.pYear + '.' + model.pMonth + '.' + model.pDay);
        if (array === undefined) {
          array = [];
        }
        array.push(model._customer.pContact);
        this.map.set(model.pYear + '.' + model.pMonth + '.' + model.pDay, array);
      }
    });
  }

  hasPayment(date: NgbDateStruct) {
    if (this.map) {
      const index = this.map.get(date.year + '.' + date.month + '.' + date.day);
      return index !== undefined;
    }
  }

  getContactName(date) {
    if (this.map) {
      const array = this.map.get(date.year + '.' + date.month + '.' + date.day);
      if (array !== undefined) {
        return array;
      } else {
        return '';
      }
    }
  }

  getDisplayedMonth() {
    return window.innerWidth <= 400 ? 1 : 2;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }
}
