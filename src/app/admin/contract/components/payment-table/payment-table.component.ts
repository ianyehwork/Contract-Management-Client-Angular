import { ContractService } from './../../services/contract.service';
import { Payment } from './../../models/payment';
import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { convertUTCDateTimeToYMD } from '../../../../shared/util/date-time-convertor';
import { PaymentEditComponent } from '../payment-edit/payment-edit.component';
import { AppConstants } from '../../../../constants';
import { Contract } from '../../models/contract';
import { ContractEditComponent } from '../contract-edit/contract-edit.component';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {

  @Input() parentModal: NgbActiveModal;
  @Input() contract: Contract;
  modelList: Payment[] = [];

  constructor(private modelService: PaymentService,
              private contractService: ContractService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.modelService.getAll(`?_contract=${this.contract._id}`).subscribe((result) => {
      this.modelList = result;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
      });
    });
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
      }, refused => {});
    }
  }

}
