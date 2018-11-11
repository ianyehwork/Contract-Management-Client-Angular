import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

import { AppConstants } from '../../../../constants';
import { ModelTableComponent } from '../../../../shared/components/model-table-component';
import { BS4AlertType, ToastService } from '../../../../shared/services/toast.service';
import { Contract } from '../../../contract/models/contract';
import { ContractService } from '../../../contract/services/contract.service';
import { CustomerSearchComponent } from '../../../customer/components/customer-search/customer-search.component';
import { ParkingLotEditComponent } from '../../../parking/components/parking-lot-edit/parking-lot-edit.component';
import { ParkingLot } from '../../../parking/models/parking-lot';
import { ContractTableService } from './../../../contract/services/contract-table.service';
import { ParkingLotTableService } from './../../../parking/services/parking-lot-table.service';

@Component({
  selector: 'app-active-parking-lot-table',
  templateUrl: './active-parking-lot-table.component.html',
  styleUrls: ['./active-parking-lot-table.component.css']
})
export class ActiveParkingLotTableComponent extends ModelTableComponent<ParkingLot, ParkingLotTableService> implements OnInit {

  contract: Contract;
  startDate: NgbDate;
  formTemplate;
  modalRef: NgbModalRef;

  constructor(
    private contractService: ContractService,
    private contractTableService: ContractTableService,
    private calendar: NgbCalendar,
    private toast: ToastService,
    service: ParkingLotTableService,
    modalService: NgbModal) {
    super(service, modalService, ParkingLotEditComponent);
    this.subscription = this.service.getModelChannel().subscribe((result) => {
      console.log(result);
      this.modelList = result.data;
      this.collectionSize = result.collectionSize;
    });
  }

  ngOnInit() {
    this.service.setCustomFilter('&status=' + true);
    this.refresh();
  }

  /**
   * This function is REQUIRED to initialize the Bootstrap
   * Modal.
   * @param template Modal Template
   */
  open(template, model: ParkingLot) {
    this.startDate = this.calendar.getToday();
    this.contract = new Contract();
    this.formTemplate = template;
    this.contract._lot = model;
    this.modalRef = this.modalService.open(template, AppConstants.MODAL_OPTIONS);
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitModel(customerForm) {
    this.contract.sYear = this.startDate.year;
    this.contract.sMonth = this.startDate.month;
    this.contract.sDay = this.startDate.day;
    this.contractService.create(this.contract).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('合同建立完成', BS4AlertType.SUCCESS);
        this.modalRef.close();
        this.service.fetchData();
        this.contractTableService.fetchData();
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
        this.contract._customer = result.data;
      }
      this.modalRef = this.modalService.open(this.formTemplate, AppConstants.MODAL_OPTIONS);
    }, refused => { });
  }

  cancel() {
    this.modalRef.close();
  }
}
