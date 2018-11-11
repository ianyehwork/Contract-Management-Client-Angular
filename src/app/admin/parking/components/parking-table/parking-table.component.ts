import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { convertUTCDateTimeToYMD } from '../../../../shared/util/date-time-convertor';
import { ModelTableComponent } from '../../../../shared/models/model-table-component';
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
    this.pageSize = 5;
    this.subscription = this.service.getModelChannel().subscribe((result) => {
      console.log(result);
      this.modelList = result.data;
      this.collectionSize = result.collectionSize;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
        array[index].dateModified = convertUTCDateTimeToYMD(array[index].dateModified);
      });
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.refresh();
  }

}
