import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { convertUTCDateTimeToYMD } from '../../../../client/poster/util/date-time-convertor';
import { AppConstants } from '../../../../constants';
import { Customer } from '../../models/customer';
import { CustomerTableService } from './../../services/customer-table.service';
import { CustomerEditComponent } from './../customer-edit/customer-edit.component';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  modelList: Customer[] = [];

  // Used for searching
  field = 'pContact';
  match = '';

  page: number;
  itemsPP = 15;

  constructor(private modelService: CustomerTableService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.modelService.getModelChannel().subscribe((result) => {
      this.modelList = result;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
        array[index].dateModified = convertUTCDateTimeToYMD(array[index].dateModified);
      });
    });
  }

  /**
   * This function is used for pagination
   */
  onPageChange() {
    console.log(this.page);
  }

  /**
   * This function is triggered when the user clicks the "Save" button
   * in CreateCustomerComponent.
   * @param model new Customer created by the user
   */
  addNewModel(model: Customer) {
    model.dateCreated = convertUTCDateTimeToYMD(model.dateCreated);
    model.dateModified = convertUTCDateTimeToYMD(model.dateModified);
    // Create a new array, and reassign to this.modelList
    // to trigger DOM update
    const updatedList = [];
    this.modelList.forEach((value, index, array) => {
      updatedList.push(array[index]);
    });
    updatedList.push(model);
    this.modelList = updatedList;
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   * @param model new Customer created by the user
   */
  openEditModal(model: Customer) {
    const modalRef = this.modalService.open(CustomerEditComponent, AppConstants.MODAL_OPTIONS);
    // Pass poster as a Input to ModalRef
    modalRef.componentInstance.model = model;
  }
}
