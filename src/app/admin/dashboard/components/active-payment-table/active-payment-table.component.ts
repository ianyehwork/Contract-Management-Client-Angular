import { ContractTableService } from './../../../contract/services/contract-table.service';
import { Component, OnInit } from '@angular/core';
import { Contract } from '../../../contract/models/contract';
import { ContractEditComponent } from '../../../contract/components/contract-edit/contract-edit.component';
import { AppConstants } from '../../../../constants';
import { NgbModal, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';


@Component({
  selector: 'app-active-payment-table',
  templateUrl: './active-payment-table.component.html',
  styleUrls: ['./active-payment-table.component.css']
})
export class ActivePaymentTableComponent implements OnInit {

  modelList: Contract[] = [];

  constructor(private service: ContractTableService,
              private modalService: NgbModal,
              private calendar: NgbCalendar) { }

  ngOnInit() {
    this.service.getContracts().subscribe(contracts => {
        this.modelList = contracts.filter((value) => {
          return value.active;
        });
        this.modelList.sort((a, b) => {
          return a.pYear - b.pYear !== 0 ? a.pYear - b.pYear :
                 a.pMonth - b.pMonth !== 0 ? a.pMonth - b.pMonth :
                 a.pDay - b.pDay;
        });
      }
    );
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   * @param model new Customer created by the user
   */
  openEditModal(model: Contract) {
    const modalRef = this.modalService.open(ContractEditComponent, AppConstants.MODAL_OPTIONS);
    // Pass poster as a Input to ModalRef
    modalRef.componentInstance.model = model;
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
