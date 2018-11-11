import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { ModelEditComponent } from '../../../../shared/models/model-edit-component';
import { ToastService } from '../../../../shared/services/toast.service';
import { Customer } from '../../models/customer';
import { CustomerTableService } from '../../services/customer-table.service';
import { CustomerService } from './../../services/customer.service';
import { CustomerDeleteComponent } from './../customer-delete/customer-delete.component';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent extends ModelEditComponent<Customer, CustomerService, CustomerTableService> {

  constructor(activeModal: NgbActiveModal,
    modelService: CustomerService,
    tableService: CustomerTableService,
    modalService: NgbModal,
    toast: ToastService) {
    super(activeModal, modelService, tableService, modalService, toast, CustomerEditComponent, CustomerDeleteComponent);
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
