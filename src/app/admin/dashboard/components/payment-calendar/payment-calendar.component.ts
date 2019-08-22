import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

import { Contract } from '../../../contract/models/contract';
import { PaymentCalendarService } from '../../../contract/services/payment-calendar.service';

@Component({
  selector: 'app-payment-calendar',
  templateUrl: './payment-calendar.component.html',
  styleUrls: ['./payment-calendar.component.css']
})
export class PaymentCalendarComponent implements OnInit {

  model: NgbDateStruct;
  modelList: Contract[] = [];
  map: Map<string, Array<string>>;
  today: NgbDate;
  constructor(private service: PaymentCalendarService,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    this.today = this.calendar.getToday();
    this.service.getModelChannel().subscribe(contracts => {
      if (contracts.data) {
        this.modelList = contracts.data.filter((value) => {
          return value.active;
        });

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
      }
    });
    this.service.fetchData();
  }

  hasPayment(date: NgbDate) {
    if (this.today.before(date)) {
      if (this.map) {
        const index = this.map.get(date.year + '.' + date.month + '.' + date.day);
        return index !== undefined;
      }
    }
  }

  hasDuePayment(date: NgbDate) {
    if (this.today.after(date)) {
      if (this.map) {
        const index = this.map.get(date.year + '.' + date.month + '.' + date.day);
        return index !== undefined;
      }
    }
  }

  isToday(date: NgbDate) {
    return this.today.year === date.year && this.today.month === date.month && this.today.day === date.day;
  }

  getTipContent(date) {
    if (this.map) {
      const array = this.map.get(date.year + '.' + date.month + '.' + date.day);
      if (array !== undefined) {
        return array;
      } else {
        return '';
      }
    }
  }

  // getDisplayedMonth() {
  //   return window.innerWidth <= 400 ? 1 : 2;
  // }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }
}
