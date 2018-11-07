import { ParkingAreaTableService } from './../../services/parking-area-table.service';
import { ParkingAreaDeleteComponent } from './../parking-area-delete/parking-area-delete.component';
import { ParkingAreaService } from '../../services/parking-area.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ParkingArea } from '../../models/parking-area';
import { AppConstants } from '../../../../constants';

@Component({
  selector: 'app-parking-area-edit',
  templateUrl: './parking-area-edit.component.html',
  styleUrls: ['./parking-area-edit.component.css']
})
export class ParkingAreaEditComponent implements OnInit {

  @Input() model: ParkingArea;
  originalModel: ParkingArea;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ParkingAreaService,
              private tableService: ParkingAreaTableService,
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
    const modalRef = this.modalService.open(ParkingAreaDeleteComponent, AppConstants.MODAL_OPTIONS);

    modalRef.componentInstance.model = this.model;
    modalRef.result.then(result => {
      if (result.operation === 'Cancel') {
        this.modelService.getById(result.data._id).subscribe(parkingLot => {
          const ref = this.modalService.open(ParkingAreaEditComponent, AppConstants.MODAL_OPTIONS);
          ref.componentInstance.model = parkingLot;
        });
      }
    }, refused => {});
  }

  cancel() {
    this.model = this.originalModel;
    this.activeModal.dismiss();
  }
}
