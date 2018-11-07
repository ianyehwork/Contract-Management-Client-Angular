import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelDeleteComponent } from '../../../../shared/components/model-delete-component';
import { ToastService } from '../../../../shared/services/toast.service';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';
import { ParkingLotTableService } from './../../services/parking-lot-table.service';

@Component({
  selector: 'app-parking-lot-delete',
  templateUrl: './parking-lot-delete.component.html',
  styleUrls: ['./parking-lot-delete.component.css']
})
export class ParkingLotDeleteComponent extends ModelDeleteComponent<ParkingLot, ParkingLotService, ParkingLotTableService> implements OnInit {

  constructor(
    activeModal: NgbActiveModal,
    modelService: ParkingLotService,
    tableService: ParkingLotTableService,
    toast: ToastService) {
    super(activeModal, modelService, tableService, toast);
  }

  ngOnInit() {
  }

}
