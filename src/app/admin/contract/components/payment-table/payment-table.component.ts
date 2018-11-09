import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from '../../../../constants';
import { ModelTableComponent } from '../../../../shared/components/model-table-component';
import { convertUTCDateTimeToYMD } from '../../../../shared/util/date-time-convertor';
import { Contract } from '../../models/contract';
import { ContractEditComponent } from '../contract-edit/contract-edit.component';
import { PaymentEditComponent } from '../payment-edit/payment-edit.component';
import { Payment } from './../../models/payment';
import { ContractService } from './../../services/contract.service';
import { PaymentTableService } from './../../services/payment-table.service';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent extends ModelTableComponent<Payment, PaymentTableService> implements OnInit {

  @Input() parentModal: NgbActiveModal;
  @Input() contract: Contract;
  modelList: Payment[] = [];

  constructor(
    private contractService: ContractService,
    service: PaymentTableService,
    modalService: NgbModal) {
    super(service, modalService, PaymentEditComponent);
    this.pageSize = 5;
    this.subscription = this.service.getModelChannel().subscribe((result) => {
      console.log(result);
      this.modelList = result.data;
      this.collectionSize = result.collectionSize;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
      });
    });
  }

  ngOnInit() {
    this.service.setExtraFilter('&_contract=' + this.contract._id);
    this.refresh();
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
    if (this.contract.active) {
      this.parentModal.dismiss();
      const modalRef = this.modalService.open(PaymentEditComponent, AppConstants.MODAL_OPTIONS);
      // Pass poster as a Input to ModalRef
      modalRef.componentInstance.model = model;
      modalRef.componentInstance.contract = this.contract;

      modalRef.result.then(result => {
        this.contractService.getById(result.contract._id).subscribe(contract => {
          const ref = this.modalService.open(ContractEditComponent, AppConstants.MODAL_OPTIONS);
          ref.componentInstance.model = contract;
        });
      }, refused => { });
    }
  }

}
