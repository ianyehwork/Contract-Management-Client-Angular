import { ParkingAreaService } from './../../services/parking-area.service';
import { Component, OnInit, Input } from '@angular/core';
import { ParkingArea } from '../../models/parking-area';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parking-area-delete',
  templateUrl: './parking-area-delete.component.html',
  styleUrls: ['./parking-area-delete.component.css']
})
export class ParkingAreaDeleteComponent implements OnInit {

  @Input() model: ParkingArea;

  constructor(private activeModal: NgbActiveModal,
              private modelService: ParkingAreaService) { }

  ngOnInit() {
  }

  deleteModel() {
    this.modelService.delete(this.model).subscribe((response) => {
      if (response) {
        this.activeModal.close({operation: 'Delete', data: response});
      }
    }, (error) => {
      console.log('Failed!');
    });
  }

  cancel(){
    this.activeModal.close({operation: 'Cancel', data: this.model});
  }
}
