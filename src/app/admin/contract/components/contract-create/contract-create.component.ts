import { BootstrapDate } from './../../../../shared/models/bootstrap-date';
import { ParkingLotSearchComponent } from './../../../parking/components/parking-lot-search/parking-lot-search.component';
import { environment } from './../../../../../environments/environment';
import { ContractTableComponent } from './../contract-table/contract-table.component';
import { Contract } from '../../models/contract';
import { Component, OnInit, Input } from '@angular/core';
import { ToastService, BS4AlertType } from '../../../../shared/services/toast.service';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ContractService } from '../../services/contract.service';
import { CustomerSearchComponent } from '../../../customer/components/customer-search/customer-search.component';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  // @Input() table: ParkingLotTableComponent;
  model: Contract;
  startDate: BootstrapDate;
  formTemplate;
  modalRef: NgbModalRef;

  constructor(private modelService: ContractService,
    private modalService: NgbModal,
    private toast: ToastService) { }

  ngOnInit() {
  }

  /**
   * This function is REQUIRED to initialize the Bootstrap
   * Modal.
   * @param template Modal Template
   */
  open(template) {
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
    console.log(this.model);
    this.modelService.create(this.model).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('合同建立完成', BS4AlertType.SUCCESS);
        // this.table.addNewModel(result);
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
