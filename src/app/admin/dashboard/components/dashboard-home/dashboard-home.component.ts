import { Component, OnInit } from '@angular/core';

import { ContractTableService } from './../../../contract/services/contract-table.service';
import { ParkingLotTableService } from './../../../parking/services/parking-lot-table.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private contractService: ContractTableService,
              private parkingLotService: ParkingLotTableService) {}

  ngOnInit() {
    this.contractService.refresh();
    this.parkingLotService.refresh();
  }

}
