import { convertUTCDateTimeToYMD } from './../../../../shared/util/date-time-convertor';
import { CustomerEditComponent } from './../customer-edit/customer-edit.component';
import { CustomerService } from './../../services/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  modelList: Customer[] = [];

  constructor(private modelService: CustomerService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.modelService.getAll().subscribe((result) => {
      this.modelList = result;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
        array[index].dateModified = convertUTCDateTimeToYMD(array[index].dateModified);
      });
    });
  }

  /**
   * This function is triggered when the user clicks the "Save" button
   * in CreateCustomerComponent.
   * @param model new Customer created by the user
   */
  addNewModel(model: Customer) {
    model.dateCreated = convertUTCDateTimeToYMD(model.dateCreated);
    model.dateModified = convertUTCDateTimeToYMD(model.dateModified);
    this.modelList.push(model);
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

    modalRef.result.then(result => {
      if (result.operation === 'Delete') {
        this.modelList = this.modelList.filter((item) => {
          if (item._id !== result.data._id) {
            return item;
          }
        });
      } else if (result.operation === 'Update') {
        this.modelList.forEach((value, index, array) => {
          if (value._id === result.data._id) {
            result.data.dateCreated = convertUTCDateTimeToYMD(result.data.dateCreated);
            result.data.dateModified = convertUTCDateTimeToYMD(result.data.dateModified);
            array[index] = result.data;
          }
        });
      }
    }, refused => {});
  }
}
