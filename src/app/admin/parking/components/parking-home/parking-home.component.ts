import { Component, OnInit } from '@angular/core';

import { ParkingAreaTableService } from './../../services/parking-area-table.service';
import { ParkingLotTableService } from './../../services/parking-lot-table.service';

@Component({
  selector: 'app-parking-home',
  templateUrl: './parking-home.component.html',
  styleUrls: ['./parking-home.component.css']
})
export class ParkingHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
