import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';


@Component({
  selector: 'app-parking-lot-edit',
  templateUrl: './parking-lot-edit.component.html',
  styleUrls: ['./parking-lot-edit.component.css']
})
export class ParkingLotEditComponent implements OnInit {

  @Input() model: ParkingLot;
  originalModel: ParkingLot;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ParkingLotService) { }

  ngOnInit() {
    this.modelService.getById(this.model._id).subscribe((response) => {
      this.model = response;
      this.originalModel = response;
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
    this.modelService.delete(this.model).subscribe((response) => {
      if (response) {
        this.activeModal.close({operation: 'Delete', data: response});
      }
    });
  }

  cancel() {
    this.model = this.originalModel;
    this.activeModal.dismiss();
  }

}
