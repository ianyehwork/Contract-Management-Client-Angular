import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

import { ContractEditComponent } from '../../../contract/components/contract-edit/contract-edit.component';
import { Contract } from '../../../contract/models/contract';
import { ModelTableComponent } from './../../../../shared/components/model-table-component';
import { ContractTableService } from './../../../contract/services/contract-table.service';

@Component({
  selector: 'app-active-payment-table',
  templateUrl: './active-payment-table.component.html',
  styleUrls: ['./active-payment-table.component.css']
})
export class ActivePaymentTableComponent extends ModelTableComponent<Contract, ContractTableService> implements OnInit {

  page: number;
  pageSize = 15;
  paginationId = 'active-payment';
  /**
   * This function is used for pagination
   */
  onPageChange() {
    // TODO
    console.log(this.page);
  }

  constructor(service: ContractTableService,
    modalService: NgbModal,
    private calendar: NgbCalendar) {
    super(service, modalService, ContractEditComponent);
  }

  ngOnInit() {
    // Default Sorting
    this.order = 'pDate';
    this.reverse = false;
    this.service.getModelChannel().subscribe(contracts => {
      this.modelList = contracts.filter((value) => {
        return value.active;
      });
      for (let i = 0; i < this.modelList.length; i++) {
        const model = this.modelList[i];
        model['pDate'] = new Date(model.pYear, model.pMonth - 1, model.pDay);
        model['pAmount'] = (model.pFrequency * model._lot.rent) - (model.pTotal % (model.pFrequency * model._lot.rent));
      }
    }
    );
  }

  // Return true if the Contract Payment Date is Today
  isToday(model: Contract) {
    const date = this.calendar.getToday();
    return date.year === model.pYear &&
      date.month === model.pMonth &&
      date.day === model.pDay;
  }

  isPastDue(model: Contract) {
    const date = this.calendar.getToday();
    const date2 = new NgbDate(model.pYear, model.pMonth, model.pDay);
    return date.after(date2);
  }

  isFuture(model: Contract) {
    const date = this.calendar.getToday();
    const date2 = new NgbDate(model.pYear, model.pMonth, model.pDay);
    return date.before(date2);
  }
}
