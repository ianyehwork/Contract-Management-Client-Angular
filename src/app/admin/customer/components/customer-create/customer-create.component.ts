import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';

import { ToastService } from '../../../../shared/services/toast.service';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { ModelCreateComponent } from '../../../../shared/models/model-create-component';
import { CustomerTableService } from './../../services/customer-table.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent extends ModelCreateComponent<Customer, CustomerService, CustomerTableService> implements OnInit {

  constructor(
    service: CustomerService,
    tableService: CustomerTableService,
    ngbService: NgbModal,
    toast: ToastService) {
    super(new Customer(), service, tableService, ngbService, toast);
    this.successMessage = '客戶建立完成';
  }

  ngOnInit() {
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
