import { ContractEditComponent } from './../contract-edit/contract-edit.component';
import { Component, OnInit, Input } from '@angular/core';
import { Contract } from '../../models/contract';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from '../../../../constants';
import { ContractTableService } from '../../services/contract-table.service';
import { SortedTable } from '../../../../shared/sorted-table/sorted-table';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent extends SortedTable implements OnInit {

  modelList: Contract[] = [];

  constructor(private service: ContractTableService,
              private modalService: NgbModal) {
    super();
  }

  ngOnInit() {
    this.service.getContracts().subscribe(contracts => {
      for (let i = 0; i < contracts.length; i++) {
        const model = contracts[i];
        model['sDate'] = new Date(model.sYear, model.sMonth - 1, model.sDay);
        model['pDate'] = new Date(model.pYear, model.pMonth - 1, model.pDay);
      }
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
