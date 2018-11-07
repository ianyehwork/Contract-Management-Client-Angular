import { ParkingLotTableService } from './../../services/parking-lot-table.service';
import { ParkingLotDeleteComponent } from './../parking-lot-delete/parking-lot-delete.component';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-parking-lot-edit',
  templateUrl: './parking-lot-edit.component.html',
  styleUrls: ['./parking-lot-edit.component.css']
})
export class ParkingLotEditComponent implements OnInit {

  @Input() model: ParkingLot;
  originalModel: ParkingLot;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ParkingLotService,
              private tableService: ParkingLotTableService,
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
        this.tableService.update(result);
        this.activeModal.close();
      }
    });
  }

  openDeleteModal() {
    this.activeModal.dismiss();
    const modalRef = this.modalService.open(ParkingLotDeleteComponent, AppConstants.MODAL_OPTIONS);

    modalRef.componentInstance.model = this.model;

    modalRef.result.then(result => {
      if (result.data) {
        this.modelService.getById(result.data._id).subscribe(customer => {
          const ref = this.modalService.open(ParkingLotDeleteComponent, AppConstants.MODAL_OPTIONS);
          ref.componentInstance.model = customer;
        });
      }
    }, refused => {});
  }

  cancel() {
    this.model = this.originalModel;
    this.activeModal.dismiss();
  }

}
