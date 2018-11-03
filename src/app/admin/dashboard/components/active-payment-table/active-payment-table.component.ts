import { Component, OnInit } from '@angular/core';
import { Contract } from '../../../contract/models/contract';
import { ActiveContractService } from '../../services/active-contract.service';
import { ContractEditComponent } from '../../../contract/components/contract-edit/contract-edit.component';
import { AppConstants } from '../../../../constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-active-payment-table',
  templateUrl: './active-payment-table.component.html',
  styleUrls: ['./active-payment-table.component.css']
})
export class ActivePaymentTableComponent implements OnInit {

  modelList: Contract[] = [];

  constructor(private service: ActiveContractService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getActiveContracts().subscribe(contracts => {
        this.modelList = contracts;
      }
    );
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
        this.service.update();
      }
    }, refused => {});
  }
}
