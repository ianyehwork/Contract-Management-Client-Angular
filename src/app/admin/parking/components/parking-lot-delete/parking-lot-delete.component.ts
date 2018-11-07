import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';
import { ParkingLotTableService } from './../../services/parking-lot-table.service';

@Component({
  selector: 'app-parking-lot-delete',
  templateUrl: './parking-lot-delete.component.html',
  styleUrls: ['./parking-lot-delete.component.css']
})
export class ParkingLotDeleteComponent implements OnInit {

  @Input() model: ParkingLot;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ParkingLotService,
              private tableService: ParkingLotTableService) { }

  ngOnInit() {
  }

  deleteModel() {
    this.modelService.delete(this.model).subscribe((response) => {
      if (response) {
        this.tableService.delete(response);
        this.activeModal.close({});
      }
    }, (error) => {
      console.log('Failed!');
    });
  }

  cancel() {
    this.activeModal.close({data: this.model});
  }
}
