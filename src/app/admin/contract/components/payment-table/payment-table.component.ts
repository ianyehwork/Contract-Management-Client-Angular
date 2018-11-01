import { Payment } from './../../models/payment';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { convertUTCDateTimeToYMD } from '../../../../shared/util/date-time-convertor';
import { PaymentEditComponent } from '../payment-edit/payment-edit.component';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

  modelList: Payment[] = [];

  constructor(private modelService: PaymentService,
              private modalService: NgbModal) { }

  ngOnInit() {
    // this.modelService.getAll().subscribe((result) => {
    //   this.modelList = result;
    //   this.modelList.forEach((value, index, array) => {
    //     array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
    //   });
    // });
  }

  /**
   * This function is triggered when the user clicks the "Save" button
   * in CreateCustomerComponent.
   * @param model new Customer created by the user
   */
  addNewModel(model: Payment) {
    model.dateCreated = convertUTCDateTimeToYMD(model.dateCreated);
    this.modelList.push(model);
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   * @param model new Customer created by the user
   */
  openEditModal(model: Payment) {
    const modalRef = this.modalService.open(PaymentEditComponent, AppConstants.MODAL_OPTIONS);
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
