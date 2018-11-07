import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';

@Component({
  selector: 'app-parking-lot-delete',
  templateUrl: './parking-lot-delete.component.html',
  styleUrls: ['./parking-lot-delete.component.css']
})
export class ParkingLotDeleteComponent implements OnInit {

  @Input() model: ParkingLot;

  constructor(private activeModal: NgbActiveModal,
    private modelService: ParkingLotService) { }

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
