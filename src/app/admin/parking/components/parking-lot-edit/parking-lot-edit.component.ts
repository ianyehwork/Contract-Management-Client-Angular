import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelEditComponent } from '../../../../shared/models/model-edit-component';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';
import { ParkingLotTableService } from './../../services/parking-lot-table.service';
import { ParkingLotDeleteComponent } from './../parking-lot-delete/parking-lot-delete.component';
import { ToastService } from '../../../../shared/services/toast.service';

@Component({
  selector: 'app-parking-lot-edit',
  templateUrl: './parking-lot-edit.component.html',
  styleUrls: ['./parking-lot-edit.component.css']
})
export class ParkingLotEditComponent extends ModelEditComponent<ParkingLot, ParkingLotService, ParkingLotTableService> {

  constructor(activeModal: NgbActiveModal,
    modelService: ParkingLotService,
    tableService: ParkingLotTableService,
    modalService: NgbModal,
    toast: ToastService) {
    super(activeModal, modelService, tableService, modalService, toast, ParkingLotEditComponent, ParkingLotDeleteComponent);
  }

}
