import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

import { AppConstants } from '../../../../constants';
import { ModelCreateComponent } from '../../../../shared/components/model-create-component';
import { ToastService } from '../../../../shared/services/toast.service';
import { CustomerSearchComponent } from '../../../customer/components/customer-search/customer-search.component';
import { Contract } from '../../models/contract';
import { ContractService } from '../../services/contract.service';
import { ParkingLotSearchComponent } from './../../../parking/components/parking-lot-search/parking-lot-search.component';
import { ContractTableService } from './../../services/contract-table.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent extends ModelCreateComponent<Contract, ContractService, ContractTableService> implements OnInit {

  startDate: NgbDate;
  formTemplate;

  constructor(
    service: ContractService,
    tableService: ContractTableService,
    ngbService: NgbModal,
    toast: ToastService,
    private calendar: NgbCalendar) {
    super(new Contract(), service, tableService, ngbService, toast);
    this.successMessage = '合同建立完成';
  }

  ngOnInit() {
  }

  // Override
  open(template) {
    this.startDate = this.calendar.getToday();
    this.formTemplate = template;
    super.open(template);
    this.model.pFrequency = 1;
  }

  // Override
  submitModel(form) {
    this.model.sYear = this.startDate.year;
    this.model.sMonth = this.startDate.month;
    this.model.sDay = this.startDate.day;
    super.submitModel(form);
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   */
  searchCustomer() {
    this.modalRef.dismiss();
    const modalRef = this.ngbService.open(CustomerSearchComponent, AppConstants.MODAL_OPTIONS);

    modalRef.result.then(result => {
      if (result.operation === 'OK') {
        this.model._customer = result.data;
      }
      this.modalRef = this.ngbService.open(this.formTemplate, AppConstants.MODAL_OPTIONS);
    }, refused => { });
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   */
  searchLot() {
    this.modalRef.dismiss();
    const modalRef = this.ngbService.open(ParkingLotSearchComponent, AppConstants.MODAL_OPTIONS);

    modalRef.result.then(result => {
      if (result.operation === 'OK') {
        this.model._lot = result.data;
      }
      this.modalRef = this.ngbService.open(this.formTemplate, AppConstants.MODAL_OPTIONS);
    }, refused => { });
  }
}
