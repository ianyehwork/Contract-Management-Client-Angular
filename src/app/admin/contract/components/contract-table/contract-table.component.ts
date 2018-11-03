import { ContractEditComponent } from './../contract-edit/contract-edit.component';
import { ContractService } from './../../services/contract.service';
import { Component, OnInit, Input } from '@angular/core';
import { Contract } from '../../models/contract';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from '../../../../constants';
import { ContractTableService } from '../../services/contract-table.service';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent implements OnInit {

  modelList: Contract[] = [];

  constructor(private service: ContractTableService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getActiveContracts().subscribe(contracts => {
      this.modelList = contracts;
    }
  );
  }

  /**
   * This function is triggered when the user clicks the "Save" button
   * in CreateCustomerComponent.
   * @param model new Customer created by the user
   */
  addNewModel(model: Contract) {
    this.modelList.push(model);
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   * @param model new Customer created by the user
   */
  openEditModal(model: Contract) {
    const modalRef = this.modalService.open(ContractEditComponent, AppConstants.MODAL_OPTIONS);
    // Pass poster as a Input to ModalRef
    modalRef.componentInstance.model = model;
  }

}
