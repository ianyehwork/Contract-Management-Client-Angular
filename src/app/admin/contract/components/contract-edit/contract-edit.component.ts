import { Contract } from './../../models/contract';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  @Input() model: Contract;
  originalModel: Contract;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ContractService) { }

  ngOnInit() {
    this.modelService.getById(this.model._id).subscribe((response) => {
      this.model = response;
      this.originalModel = response;
      console.log(this.model._customer.vehicles);
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

}
