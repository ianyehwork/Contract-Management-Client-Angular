import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { AppConstants } from '../../../../constants';
import { BS4AlertType, ToastService } from '../../../../shared/services/toast.service';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { CustomerTableService } from './../../services/customer-table.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  model = new Customer();
  modalRef: NgbModalRef;

  constructor(private modelService: CustomerService,
              private tableService: CustomerTableService,
              private ngbService: NgbModal,
              private toast: ToastService) { }

  ngOnInit() {
  }

  /**
   * This function is REQUIRED to initialize the Bootstrap
   * Modal.
   * @param template Modal Template
   */
  open(template) {
    this.modalRef = this.ngbService.open(template, AppConstants.MODAL_OPTIONS);
  }

  close() {
    this.modalRef.close();
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitModel(customerForm) {
    this.modelService.create(this.model).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('客戶建立完成', BS4AlertType.SUCCESS);
        // this.table.addNewModel(result);
        this.tableService.add(result);
        customerForm.resetForm();
        this.model = new Customer();
        this.modalRef.close();
      }
    }, (error) => {
      // this.invalidLogin = true;
      console.log('Failed!');
    });
  }

  /**
   * The function is SPECIFIC to add the vehicle when the + is clicked
   * @param value the vehicle to be added to the list
   */
  addVehicle(vin) {
    if (!_.isEmpty(vin.value)) {
      this.model.vehicles.push(vin.value);
    }
  }

  /**
   * The function is SPECIFIC to delete the vehicle when the X is clicked
   * @param vehicle the vehicle to be removed from the list
   */
  deleteVehicle(vehicle) {
    this.model.vehicles = this.model.vehicles.filter((v) => {
      return v !== vehicle;
    });
  }
}
