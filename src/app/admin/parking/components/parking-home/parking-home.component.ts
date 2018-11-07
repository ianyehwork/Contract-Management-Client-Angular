import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { ParkingLotTableService } from './../../services/parking-lot-table.service';

@Component({
  selector: 'app-parking-home',
  templateUrl: './parking-home.component.html',
  styleUrls: ['./parking-home.component.css']
})
export class ParkingHomeComponent implements OnInit {

  constructor(private service: ParkingLotTableService) { }

  ngOnInit() {
    this.service.refresh();
  }

}
