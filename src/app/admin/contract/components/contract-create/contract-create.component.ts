import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

import { AppConstants } from '../../../../constants';
import { BS4AlertType, ToastService } from '../../../../shared/services/toast.service';
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
export class ContractCreateComponent implements OnInit {

  model: Contract;
  startDate: NgbDate;
  formTemplate;
  modalRef: NgbModalRef;

  constructor(private modelService: ContractService,
    private tableService: ContractTableService,
    private modalService: NgbModal,
    private toast: ToastService,
    private calendar: NgbCalendar) { }

  ngOnInit() {
  }

  /**
   * This function is REQUIRED to initialize the Bootstrap
   * Modal.
   * @param template Modal Template
   */
  open(template) {
    this.startDate = this.calendar.getToday();
    this.model = new Contract();
    this.formTemplate = template;
    this.modalRef = this.modalService.open(template, AppConstants.MODAL_OPTIONS);
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitModel(customerForm) {
    this.model.sYear = this.startDate.year;
    this.model.sMonth = this.startDate.month;
    this.model.sDay = this.startDate.day;
    this.modelService.create(this.model).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('合同建立完成', BS4AlertType.SUCCESS);
        this.tableService.add(result);
        customerForm.resetForm();
        this.model = new Contract();
        this.modalRef.close();
      }
    }, (error) => {
      // this.invalidLogin = true;
      console.log('Failed!');
    });
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   */
  searchCustomer() {
    this.modalRef.dismiss();
    const modalRef = this.modalService.open(CustomerSearchComponent, AppConstants.MODAL_OPTIONS);

    modalRef.result.then(result => {
      if (result.operation === 'OK') {
        this.model._customer = result.data;
      }
      this.modalRef = this.modalService.open(this.formTemplate, AppConstants.MODAL_OPTIONS);
    }, refused => {});
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   */
  searchLot() {
    this.modalRef.dismiss();
    const modalRef = this.modalService.open(ParkingLotSearchComponent, AppConstants.MODAL_OPTIONS);

    modalRef.result.then(result => {
      if (result.operation === 'OK') {
        this.model._lot = result.data;
      }
      this.modalRef = this.modalService.open(this.formTemplate, AppConstants.MODAL_OPTIONS);
    }, refused => {});
  }
}
