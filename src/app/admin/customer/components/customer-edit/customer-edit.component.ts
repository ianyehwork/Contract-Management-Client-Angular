import { CustomerTableComponent } from './../customer-table/customer-table.component';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
              private modelService: CustomerService) { }

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

  deleteModel() {
    this.modelService.delete(this.model).subscribe((response) => {
      if (response) {
        this.activeModal.close({operation: 'Delete', data: response});
      }
    });
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
