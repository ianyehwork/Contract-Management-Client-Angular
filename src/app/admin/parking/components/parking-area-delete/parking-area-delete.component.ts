import { ParkingAreaService } from './../../services/parking-area.service';
import { Component, OnInit, Input } from '@angular/core';
import { ParkingArea } from '../../models/parking-area';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ParkingAreaTableService } from '../../services/parking-area-table.service';

@Component({
  selector: 'app-parking-area-delete',
  templateUrl: './parking-area-delete.component.html',
  styleUrls: ['./parking-area-delete.component.css']
})
export class ParkingAreaDeleteComponent implements OnInit {

  @Input() model: ParkingArea;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ParkingAreaService,
              private tableService: ParkingAreaTableService) { }

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
    this.activeModal.close({operation: 'Cancel', data: this.model});
  }
}
