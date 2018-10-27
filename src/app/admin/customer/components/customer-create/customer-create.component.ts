import { Component, OnInit} from '@angular/core';
import { ToastService, BS4AlertType } from '../../../../shared/services/toast.service';

import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {


  newCustomer = new Customer();
  modalRef: NgbModalRef;

  constructor(private customerService: CustomerService,
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
    this.modalRef = this.modalService.open(template, { size: 'lg' });
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitCustomer(customerForm) {
    console.log(this.newCustomer);
    customerForm.resetForm();
    this.modalRef.close();
    // this.customerService.create(this.newCustomer).subscribe((result) => {
    //   if (result) {
    //     this.toast.sendMessage('Customer created successfully', BS4AlertType.SUCCESS);
    //     customerForm.resetForm();
    //     this.modalRef.close();
    //   }
    // }, (error) => {
    //   // this.invalidLogin = true;
    //   console.log('Failed!');
    // });
  }

  /**
   * The function is SPECIFIC to add the vehicle when the + is clicked
   * @param value the vehicle to be added to the list
   */
  addVehicle(vin) {
    console.log(vin.value);
    if (!_.isEmpty(vin.value)) {
      this.newCustomer.vehicles.push(vin.value);
    }
  }

  /**
   * The function is SPECIFIC to delete the vehicle when the X is clicked
   * @param vehicle the vehicle to be removed from the list
   */
  deleteVehicle(vehicle) {
    this.newCustomer.vehicles = this.newCustomer.vehicles.filter((v) => {
      return v !== vehicle;
    });
  }
}
