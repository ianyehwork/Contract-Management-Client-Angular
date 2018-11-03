import { ContractTableService } from './../../services/contract-table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-home',
  templateUrl: './contract-home.component.html',
  styleUrls: ['./contract-home.component.css']
})
export class ContractHomeComponent implements OnInit {

  constructor(private service: ContractTableService) { }

  ngOnInit() {
    this.service.updateAll();
  }

}
