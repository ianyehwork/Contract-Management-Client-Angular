import { ParkingArea } from './../../models/parking-area';
import { ParkingAreaService } from './../../services/parking-area.service';
import { Component, OnInit } from '@angular/core';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parking-lot-search',
  templateUrl: './parking-lot-search.component.html',
  styleUrls: ['./parking-lot-search.component.css']
})
export class ParkingLotSearchComponent implements OnInit {

  modelList: ParkingLot[] = [];
  areaList: ParkingArea[] = [];

  constructor(private activeModal: NgbActiveModal,
              private modelService: ParkingLotService,
              private parkingAreaService: ParkingAreaService) { }

  ngOnInit() {
    this.parkingAreaService.getAll().subscribe((result) => {
      this.areaList = result;
    });
  }

  /**
   * This function is REQUIRED to fire the search request to the server
   * when the search button is clicked
   * @param text criteria
   */
  search(text) {
    this.modelService.getAll(`?_area=${text}`).subscribe((result) => {
      this.modelList = result;
    });
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
