import { Contract } from './../../models/contract';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContractService } from '../../services/contract.service';
import { PaymentCreateComponent } from '../payment-create/payment-create.component';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  @Input() model: Contract;
  originalModel: Contract;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ContractService,
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

  deleteModel() {
    this.model.active = false;
    this.modelService.update(this.model).subscribe((response) => {
      if (response) {
        this.activeModal.close({operation: 'Update', data: response});
      }
    });
  }

  cancel() {
    this.model = this.originalModel;
    this.activeModal.dismiss();
  }

  addPayment() {
    const modalRef = this.modalService.open(PaymentCreateComponent, AppConstants.MODAL_OPTIONS);
    modalRef.componentInstance.contract = this.model;
    // this.activeModal.dismiss();
    modalRef.result.then(result => {
      if (result.operation === 'OK') {
        // result.data;
      }
    }, refused => {});
  }
}
