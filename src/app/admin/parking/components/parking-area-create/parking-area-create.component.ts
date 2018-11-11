import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelCreateComponent } from '../../../../shared/models/model-create-component';
import { ToastService } from '../../../../shared/services/toast.service';
import { ParkingArea } from '../../models/parking-area';
import { ParkingAreaTableService } from '../../services/parking-area-table.service';
import { ParkingAreaService } from '../../services/parking-area.service';

@Component({
  selector: 'app-parking-area-create',
  templateUrl: './parking-area-create.component.html',
  styleUrls: ['./parking-area-create.component.css']
})
export class ParkingAreaCreateComponent extends ModelCreateComponent<ParkingArea, ParkingAreaService, ParkingAreaTableService> implements OnInit {

  constructor(
    service: ParkingAreaService,
    tableService: ParkingAreaTableService,
    ngbService: NgbModal,
    toast: ToastService) {
    super(new ParkingArea(), service, tableService, ngbService, toast);
    this.successMessage = '停車區建立完成';
  }

  ngOnInit() {
  }

}
