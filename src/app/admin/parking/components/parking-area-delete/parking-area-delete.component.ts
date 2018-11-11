import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelDeleteComponent } from '../../../../shared/models/model-delete-component';
import { ToastService } from '../../../../shared/services/toast.service';
import { ParkingArea } from '../../models/parking-area';
import { ParkingAreaTableService } from './../../services/parking-area-table.service';
import { ParkingAreaService } from './../../services/parking-area.service';

@Component({
  selector: 'app-parking-area-delete',
  templateUrl: './parking-area-delete.component.html',
  styleUrls: ['./parking-area-delete.component.css']
})
export class ParkingAreaDeleteComponent extends ModelDeleteComponent<ParkingArea, ParkingAreaService, ParkingAreaTableService> implements OnInit {

  constructor(
    activeModal: NgbActiveModal,
    modelService: ParkingAreaService,
    tableService: ParkingAreaTableService,
    toast: ToastService) {
    super(activeModal, modelService, tableService, toast);
  }

  ngOnInit() {
  }

}
