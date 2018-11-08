import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contract } from '../../models/contract';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css']
})
export class ContractDeleteComponent implements OnInit {

  @Input() model: Contract;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  deleteModel() {
    this.activeModal.close({ operation: 'OK', data: this.model });
  }

  cancel() {
    this.activeModal.close({ operation: 'Cancel', data: this.model });
  }
}
