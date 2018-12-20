import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

import { ContractEditComponent } from '../../../contract/components/contract-edit/contract-edit.component';
import { Contract } from '../../../contract/models/contract';
import { ModelTableComponent } from '../../../../shared/models/model-table-component';
import { ContractTableService } from './../../../contract/services/contract-table.service';

@Component({
  selector: 'app-active-payment-table',
  templateUrl: './active-payment-table.component.html',
  styleUrls: ['./active-payment-table.component.css']
})
export class ActivePaymentTableComponent extends ModelTableComponent<Contract, ContractTableService> implements OnInit {

  paginationId = 'active-payment';

  constructor(
    private calendar: NgbCalendar,
    service: ContractTableService,
    modalService: NgbModal) {
    super(service, modalService, ContractEditComponent);
    this.subscription = this.service.getModelChannel().subscribe(result => {
      for (let i = 0; i < result.data.length; i++) {
        const model = result.data[i];
        model['pDate'] = new Date(model.pYear, model.pMonth - 1, model.pDay);
        model['pAmount'] = (model.pFrequency * model._lot.rent) - (model.pTotal % (model.pFrequency * model._lot.rent));
      }
      this.modelList = result.data;
      this.collectionSize = result.collectionSize;
      this.isLoading = false;
    }
    );
  }

  ngOnInit() {
    this.service.setCustomFilter('&active=' + true);
    this.order = 'pDate';
    this.reverse = 1;
    this.refresh();
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
