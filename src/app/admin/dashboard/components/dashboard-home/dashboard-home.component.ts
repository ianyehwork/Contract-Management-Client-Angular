import { ContractTableService } from './../../../contract/services/contract-table.service';
import { ActiveParkingLotService } from './../../services/active-parking-lot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private contractService: ContractTableService,
              private parkingLotService: ActiveParkingLotService) {}

  ngOnInit() {
    this.contractService.updateAll();
    this.parkingLotService.update();
  }

}
