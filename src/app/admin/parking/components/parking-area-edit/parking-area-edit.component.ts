import { ParkingAreaService } from '../../services/parking-area.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ParkingArea } from '../../models/parking-area';

@Component({
  selector: 'app-parking-area-edit',
  templateUrl: './parking-area-edit.component.html',
  styleUrls: ['./parking-area-edit.component.css']
})
export class ParkingAreaEditComponent implements OnInit {
  @Input() model: ParkingArea;
  originalModel: ParkingArea;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ParkingAreaService) { }

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
