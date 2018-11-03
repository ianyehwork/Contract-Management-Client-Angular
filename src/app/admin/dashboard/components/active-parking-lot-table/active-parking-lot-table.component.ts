import { ActiveParkingLotService } from './../../services/active-parking-lot.service';
import { Component, OnInit } from '@angular/core';
import { ParkingLot } from '../../../parking/models/parking-lot';

@Component({
  selector: 'app-active-parking-lot-table',
  templateUrl: './active-parking-lot-table.component.html',
  styleUrls: ['./active-parking-lot-table.component.css']
})
export class ActiveParkingLotTableComponent implements OnInit {

  modelList: ParkingLot[] = [];

  constructor(private service: ActiveParkingLotService) { }

  ngOnInit() {
    this.service.getActiveContracts().subscribe(parkinglots => {
      this.modelList = parkinglots;
    }
  );
  }

}
