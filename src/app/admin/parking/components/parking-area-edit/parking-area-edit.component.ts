import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelEditComponent } from '../../../../shared/components/model-edit-component';
import { ParkingArea } from '../../models/parking-area';
import { ParkingAreaService } from '../../services/parking-area.service';
import { ToastService } from './../../../../shared/services/toast.service';
import { ParkingAreaTableService } from './../../services/parking-area-table.service';
import { ParkingAreaDeleteComponent } from './../parking-area-delete/parking-area-delete.component';

@Component({
  selector: 'app-parking-area-edit',
  templateUrl: './parking-area-edit.component.html',
  styleUrls: ['./parking-area-edit.component.css']
})
export class ParkingAreaEditComponent extends ModelEditComponent<ParkingArea, ParkingAreaService, ParkingAreaTableService> {

  constructor(activeModal: NgbActiveModal,
    modelService: ParkingAreaService,
    tableService: ParkingAreaTableService,
    modalService: NgbModal,
    toast: ToastService) {
    super(activeModal, modelService, tableService, modalService, toast, ParkingAreaEditComponent, ParkingAreaDeleteComponent);
  }

}
