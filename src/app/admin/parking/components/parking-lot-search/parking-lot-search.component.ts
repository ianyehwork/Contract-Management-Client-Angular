import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelTableComponent } from '../../../../shared/models/model-table-component';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotEditComponent } from '../parking-lot-edit/parking-lot-edit.component';
import { ParkingArea } from './../../models/parking-area';
import { ParkingAreaService } from './../../services/parking-area.service';
import { ParkingLotTableService } from './../../services/parking-lot-table.service';

@Component({
  selector: 'app-parking-lot-search',
  templateUrl: './parking-lot-search.component.html',
  styleUrls: ['./parking-lot-search.component.css']
})
export class ParkingLotSearchComponent extends ModelTableComponent<ParkingLot, ParkingLotTableService> implements OnInit {

  areaList: ParkingArea[] = [];
  areaId = '';

  constructor(
    private activeModal: NgbActiveModal,
    private parkingAreaService: ParkingAreaService,
    service: ParkingLotTableService,
    modalService: NgbModal) {
    super(service, modalService, ParkingLotEditComponent);

    this.parkingAreaService.getAll().subscribe((result) => {
      this.areaList = result.data;
    });

    this.field = '';
    this.subscription = this.service.getModelChannel().subscribe((result) => {
      this.modelList = result.data;
      this.collectionSize = result.collectionSize;
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.service.setCustomFilter('&status=1');
    this.refresh();
  }

  search() {
    let filterStr = '&status=1';
    if (this.areaId) {
      filterStr += '&_area=' + this.areaId;
    }
    this.service.setCustomFilter(filterStr);
    this.refresh();
  }

  /**
   * This function is REQUIRED to return the selected model when the users
   * double click the tables row
   * @param model the selected model
   */
  returnModel(model) {
    this.activeModal.close({operation: 'OK', data: model});
  }

  /**
   * This function is REQUIRED when the users close the Modal
   */
  cancel() {
    this.activeModal.close({operation: 'Cancel'});
  }

}
