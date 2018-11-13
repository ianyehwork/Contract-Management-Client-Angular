import { Component, OnInit } from '@angular/core';
import { ModelTableComponent } from '../../../../shared/models/model-table-component';
import { Payment } from '../../../contract/models/payment';
import { PaymentTableService } from '../../../contract/services/payment-table.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentEditComponent } from '../../../contract/components/payment-edit/payment-edit.component';
import { convertUTCDateTimeToYMD } from '../../../../shared/util/date-time-convertor';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  styleUrls: ['./income-table.component.css']
})
export class IncomeTableComponent extends ModelTableComponent<Payment, PaymentTableService> implements OnInit {

  contactName = '';

  constructor(
    service: PaymentTableService,
    modalService: NgbModal) {
    super(service, modalService, PaymentEditComponent);
    this.order = 'dateCreated';
    this.pageSize = 15;
    this.subscription = this.service.getModelChannel().subscribe((result) => {
      console.log(result);
      this.modelList = result.data;
      this.collectionSize = result.collectionSize;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
      });
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.field = 'type';
    this.refresh();
  }

  refresh() {
    this.isLoading = true;
    if (this.contactName !== '') {
      this.service.setCustomFilter('&contactName=' + this.contactName);
    } else {
      this.service.clearCustomFilter();
    }

    this.service.refresh(
      this.field,
      this.match,
      this.order,
      this.reverse,
      this.page,
      this.pageSize
    );
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
    modalRef.componentInstance.contract = model._id;

    modalRef.result.then(result => {
      if (result.operation === 'Update') {
        this.refresh();
      }
    }, refused => { });
  }
}

