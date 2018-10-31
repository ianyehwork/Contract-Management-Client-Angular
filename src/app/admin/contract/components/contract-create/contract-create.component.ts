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
  model = new Contract();
  startDate;
  endDate;
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
    this.formTemplate = template;
    this.modalRef = this.modalService.open(template, AppConstants.MODAL_OPTIONS);
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitModel(customerForm) {
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
   * @param model new Customer created by the user
   */
  searchCustomer() {
    this.modalRef.dismiss();
    const modalRef = this.modalService.open(CustomerSearchComponent, AppConstants.MODAL_OPTIONS);
    // Pass poster as a Input to ModalRef
    // modalRef.componentInstance.model = model;

    modalRef.result.then(result => {
      console.log(result);
      this.modalRef = this.modalService.open(this.formTemplate, AppConstants.MODAL_OPTIONS);
      // if (result.operation === 'Delete') {
      //   this.modelList = this.modelList.filter((item) => {
      //     if (item._id !== result.data._id) {
      //       return item;
      //     }
      //   });
      // } else if (result.operation === 'Update') {
      //   this.modelList.forEach((value, index, array) => {
      //     if (value._id === result.data._id) {
      //       result.data.dateCreated = convertUTCDateTimeToYMD(result.data.dateCreated);
      //       result.data.dateModified = convertUTCDateTimeToYMD(result.data.dateModified);
      //       array[index] = result.data;
      //     }
      //   });
      // }
    }, refused => {});
  }
}
