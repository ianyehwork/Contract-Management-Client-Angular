import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { AppConstants } from '../../../../constants';
import { Customer } from '../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { CustomerDeleteComponent } from './../customer-delete/customer-delete.component';
import { CustomerTableService } from '../../services/customer-table.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  @Input() model: Customer;
  originalModel: Customer;

  constructor(private activeModal: NgbActiveModal,
              private modelService: CustomerService,
              private tableService: CustomerTableService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.modelService.getById(this.model._id).subscribe((response) => {
      this.model = response;
      this.originalModel = response;
    });
  }

  updateModel() {
    this.modelService.update(this.model).subscribe((result) => {
      if (result) {
        this.tableService.update(result);
        this.activeModal.close();
      }
    });
  }

  /**
   * This function is triggered when the user clicks the delete button
   * to delete the model.
   * @param model new Customer created by the user
   */
  openDeleteModal() {
    this.activeModal.dismiss();
    const modalRef = this.modalService.open(CustomerDeleteComponent, AppConstants.MODAL_OPTIONS);

    modalRef.componentInstance.model = this.model;

    modalRef.result.then(result => {
      if (result.data) {
        this.modelService.getById(result.data._id).subscribe(customer => {
          const ref = this.modalService.open(CustomerEditComponent, AppConstants.MODAL_OPTIONS);
          ref.componentInstance.model = customer;
        });
      }
    }, refused => {});
  }

  cancel() {
    this.model = this.originalModel;
    this.activeModal.dismiss();
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
