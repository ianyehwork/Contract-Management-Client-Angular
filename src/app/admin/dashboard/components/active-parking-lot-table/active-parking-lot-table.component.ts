import { ParkingLotTableService } from './../../../parking/services/parking-lot-table.service';
import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

import { AppConstants } from '../../../../constants';
import { BS4AlertType, ToastService } from '../../../../shared/services/toast.service';
import { Contract } from '../../../contract/models/contract';
import { ContractService } from '../../../contract/services/contract.service';
import { CustomerSearchComponent } from '../../../customer/components/customer-search/customer-search.component';
import { ParkingLot } from '../../../parking/models/parking-lot';
import { ContractTableService } from './../../../contract/services/contract-table.service';

@Component({
  selector: 'app-active-parking-lot-table',
  templateUrl: './active-parking-lot-table.component.html',
  styleUrls: ['./active-parking-lot-table.component.css']
})
export class ActiveParkingLotTableComponent implements OnInit {

  contract: Contract;
  startDate: NgbDate;
  formTemplate;
  modalRef: NgbModalRef;

  page: number;
  pageSize = 15;
  paginationId = 'active-parking-lot';

  modelList: ParkingLot[] = [];

  constructor(private service: ParkingLotTableService,
              private modelService: ContractService,
              private modalService: NgbModal,
              private toast: ToastService,
              private calendar: NgbCalendar,
              private contractService: ContractTableService) { }

  ngOnInit() {
    this.service.getModelChannel().subscribe(parkinglots => {
      this.modelList = parkinglots.filter((value) => {
        return value.status;
      });
    }
    );
  }

  /**
   * This function is used for pagination
   */
  onPageChange() {
    console.log(this.page);
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
    console.log(this.contract);
    this.modelService.create(this.contract).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('合同建立完成', BS4AlertType.SUCCESS);
        this.modalRef.close();
        this.service.delete(result._lot);
        this.contractService.refresh();
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
