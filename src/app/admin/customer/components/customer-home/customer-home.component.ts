import { CustomerTableService } from './../../services/customer-table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private service: CustomerTableService) {
  }

  ngOnInit() {
    this.service.updateAll();
  }

}
