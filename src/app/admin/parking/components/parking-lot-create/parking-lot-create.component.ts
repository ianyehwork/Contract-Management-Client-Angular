import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelCreateComponent } from '../../../../shared/models/model-create-component';
import { ToastService } from '../../../../shared/services/toast.service';
import { ParkingArea } from '../../models/parking-area';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';
import { ParkingLotTableService } from './../../services/parking-lot-table.service';

@Component({
  selector: 'app-parking-lot-create',
  templateUrl: './parking-lot-create.component.html',
  styleUrls: ['./parking-lot-create.component.css']
})
export class ParkingLotCreateComponent extends ModelCreateComponent<ParkingLot, ParkingLotService, ParkingLotTableService> implements OnInit {

  @Input() area: ParkingArea;

  constructor(
    service: ParkingLotService,
    tableService: ParkingLotTableService,
    ngbService: NgbModal,
    toast: ToastService) {
    super(new ParkingLot(), service, tableService, ngbService, toast);
    this.successMessage = '停車位建立完成';
  }

  ngOnInit() {
  }

  // Override
  open(template) {
    this.model.rent = this.area.defaultRent;
    this.model.deposit = this.area.defaultDeposit;
    this.model.identifier = this.area.identifier;
    super.open(template);
  }

  // Override
  submitModel(form) {
    this.model._area = this.area;
    super.submitModel(form);
  }

}
