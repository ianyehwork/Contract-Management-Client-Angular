import { ActiveContractService } from './../../services/active-contract.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private service: ActiveContractService) {}

  ngOnInit() {
    this.service.update();
  }

}
