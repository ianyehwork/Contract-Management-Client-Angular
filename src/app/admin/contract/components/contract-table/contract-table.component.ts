import { ContractEditComponent } from './../contract-edit/contract-edit.component';
import { ContractService } from './../../services/contract.service';
import { Component, OnInit, Input } from '@angular/core';
import { Contract } from '../../models/contract';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-contract-table',
  templateUrl: './contract-table.component.html',
  styleUrls: ['./contract-table.component.css']
})
export class ContractTableComponent implements OnInit {

  modelList: Contract[] = [];

  constructor(private service: ContractService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getAll().subscribe((result) => {
      this.modelList = result;
    });
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

    modalRef.result.then(result => {
      if (result.operation === 'Update') {
        this.modelList.forEach((value, index, array) => {
          if (value._id === result.data._id) {
            array[index] = result.data;
          }
        });
      }
    }, refused => {});
  }


}
