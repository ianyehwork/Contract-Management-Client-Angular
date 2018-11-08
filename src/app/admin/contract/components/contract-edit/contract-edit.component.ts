import { ContractDeleteComponent } from './../contract-delete/contract-delete.component';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { convertUTCDateTimeToYMD } from '../../../../client/poster/util/date-time-convertor';
import { AppConstants } from '../../../../constants';
import { ParkingLotTableService } from '../../../parking/services/parking-lot-table.service';
import { ContractService } from '../../services/contract.service';
import { PaymentCreateComponent } from '../payment-create/payment-create.component';
import { Contract } from './../../models/contract';
import { ContractTableService } from './../../services/contract-table.service';

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
    private modalService: NgbModal,
    private parkingLotTableService: ParkingLotTableService) { }

  ngOnInit() {
    this.modelService.getById(this.model._id).subscribe((response) => {
      response.dateModified = convertUTCDateTimeToYMD(response.dateModified);
      this.model = response;
    });
  }

  updateModel() {
    this.modelService.update(this.model).subscribe((result) => {
      if (result) {
        this.activeModal.close();
        this.tableModelService.update(result);
      }
    });
  }

  deleteModel() {
    this.activeModal.dismiss();
    const modalRef = this.modalService.open(ContractDeleteComponent, AppConstants.MODAL_OPTIONS);
    modalRef.componentInstance.model = this.model;

    modalRef.result.then(result => {
      if (result.operation === 'Cancel') {
        this.modelService.getById(result.data._id).subscribe(data => {
          const ref = this.modalService.open(ContractEditComponent, AppConstants.MODAL_OPTIONS);
          ref.componentInstance.model = data;
        });
      } else {
        this.model.active = false;
        this.modelService.update(this.model).subscribe((updatedModel) => {
          if (updatedModel) {
            this.activeModal.close();
            this.tableModelService.update(this.model);
            this.model._lot.status = true;
            this.parkingLotTableService.update(this.model._lot);
          }
        });
      }
    }, refused => { });
  }

  cancel() {
    this.activeModal.close();
    this.tableModelService.update(this.model);
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
    }, refused => { });
  }
}
