import { ActiveParkingLotService } from './../../services/active-parking-lot.service';
import { ActiveContractService } from './../../services/active-contract.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private contractService: ActiveContractService,
              private parkingLotService: ActiveParkingLotService) {}

  ngOnInit() {
    this.contractService.update();
    this.parkingLotService.update();
  }

}
