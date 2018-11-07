import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { convertUTCDateTimeToYMD } from '../../../../client/poster/util/date-time-convertor';
import { ParkingLotEditComponent } from '../parking-lot-edit/parking-lot-edit.component';
import { ModelTableComponent } from './../../../../shared/components/model-table-component';
import { ParkingArea } from './../../models/parking-area';
import { ParkingLot } from './../../models/parking-lot';
import { ParkingLotTableService } from './../../services/parking-lot-table.service';

@Component({
  selector: 'app-parking-lot-table',
  templateUrl: './parking-lot-table.component.html',
  styleUrls: ['./parking-lot-table.component.css']
})
export class ParkingLotTableComponent extends ModelTableComponent<ParkingLot, ParkingLotTableService> implements OnInit {

  @Input() area: ParkingArea;

  constructor(service: ParkingLotTableService, modalService: NgbModal) {
    super(service, modalService, ParkingLotEditComponent);
  }

  ngOnInit() {
    this.service.getModelChannel().subscribe((result) => {
      this.modelList = result.filter((value: any) => {
        return value._area === this.area._id;
      });
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
        array[index].dateModified = convertUTCDateTimeToYMD(array[index].dateModified);
      });
    });
    this.service.notify();
  }

}
