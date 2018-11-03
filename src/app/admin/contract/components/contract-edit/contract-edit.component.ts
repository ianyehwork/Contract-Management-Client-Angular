import { ContractTableService } from './../../services/contract-table.service';
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

  constructor(public activeModal: NgbActiveModal,
              private modelService: ContractService,
              private tableModelService: ContractTableService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.modelService.getById(this.model._id).subscribe((response) => {
      if (!this.model) {
        this.model = response;
      }
    });
  }

  updateModel() {
    this.modelService.update(this.model).subscribe((result) => {
      if (result) {
        this.activeModal.close();
        this.tableModelService.update(result._id);
      }
    });
  }

  deleteModel() {
    this.model.active = false;
    this.modelService.update(this.model).subscribe((result) => {
      if (result) {
        this.activeModal.close();
        this.tableModelService.update(result._id);
      }
    });
  }

  cancel() {
    this.activeModal.close();
    this.tableModelService.update(this.model._id);
  }

  addPayment() {
    this.activeModal.dismiss();
    const modalRef = this.modalService.open(PaymentCreateComponent, AppConstants.MODAL_OPTIONS);
    modalRef.componentInstance.contract = this.model;
    // this.activeModal.dismiss();
    modalRef.result.then(result => {
      this.modelService.getById(result.contract._id).subscribe(contract => {
        const ref = this.modalService.open(ContractEditComponent, AppConstants.MODAL_OPTIONS);
        ref.componentInstance.model = contract;
      });
    }, refused => {});
  }
}
