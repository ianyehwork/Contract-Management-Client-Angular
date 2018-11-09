import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { convertUTCDateTimeToYMD } from '../../../../shared/util/date-time-convertor';
import { ModelTableComponent } from '../../../../shared/components/model-table-component';
import { ParkingAreaEditComponent } from '../parking-area-edit/parking-area-edit.component';
import { ParkingArea } from './../../models/parking-area';
import { ParkingAreaTableService } from './../../services/parking-area-table.service';

@Component({
  selector: 'app-parking-table',
  templateUrl: './parking-table.component.html',
  styleUrls: ['./parking-table.component.css']
})
export class ParkingTableComponent extends ModelTableComponent<ParkingArea, ParkingAreaTableService> implements OnInit {

  constructor(service: ParkingAreaTableService, modalService: NgbModal) {
    super(service, modalService, ParkingAreaEditComponent);
  }

  ngOnInit() {
    this.service.getModelChannel().subscribe((result) => {
      this.modelList = result;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
        array[index].dateModified = convertUTCDateTimeToYMD(array[index].dateModified);
      });
    });
  }

}
