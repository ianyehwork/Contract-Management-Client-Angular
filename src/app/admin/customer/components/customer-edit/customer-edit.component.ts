import { TestBed } from '@angular/core/testing';
import { CustomerService } from './../../services/customer.service';
import { CustomerDeleteComponent } from './../customer-delete/customer-delete.component';
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from '../../../../constants';
import * as _ from 'lodash';

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
        this.activeModal.close({operation: 'Update', data: result});
      }
    });
  }

  /**
   * This function is triggered when the user clicks the delete button
   * to delete the model.
   * @param model new Customer created by the user
   */
  openDeleteModal(model: Customer) {
    this.activeModal.dismiss();
    const modalRef = this.modalService.open(CustomerDeleteComponent);

    modalRef.componentInstance.model = model;
    modalRef.result.then(result => {
      this.modelService.getById(result.data._id).subscribe(customer => {
        const ref = this.modalService.open(CustomerEditComponent, AppConstants.MODAL_OPTIONS);
        ref.componentInstance.model = customer;
      });
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
