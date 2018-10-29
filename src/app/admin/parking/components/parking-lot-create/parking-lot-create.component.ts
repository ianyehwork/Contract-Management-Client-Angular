import { ParkingLotService } from './../../server/parking-lot.service';
import { Component, OnInit, Input } from '@angular/core';
import { ToastService, BS4AlertType } from '../../../../shared/services/toast.service';

import { ParkingLot } from '../../models/parking-lot';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ParkingLotTableComponent } from '../parking-lot-table/parking-lot-table.component';
import { ParkingArea } from '../../models/parking-area';

@Component({
  selector: 'app-parking-lot-create',
  templateUrl: './parking-lot-create.component.html',
  styleUrls: ['./parking-lot-create.component.css']
})
export class ParkingLotCreateComponent implements OnInit {
  @Input() area: ParkingArea;
  @Input() table: ParkingLotTableComponent;
  model = new ParkingLot();
  modalRef: NgbModalRef;

  constructor(private modelService: ParkingLotService,
              private ngbService: NgbModal,
              private toast: ToastService) { }

  ngOnInit() {
  }

  /**
   * This function is REQUIRED to initialize the Bootstrap
   * Modal.
   * @param template Modal Template
   */
  open(template) {
    this.model.rent = this.area.defaultRent;
    this.model.deposit = this.area.defaultDeposit;
    this.modalRef = this.ngbService.open(template, { size: 'lg' });
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitModel(customerForm) {
    this.model._area = this.area._id;
    this.modelService.create(this.model).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('停車位建立完成', BS4AlertType.SUCCESS);
        this.table.addNewModel(result);
        customerForm.resetForm();
        this.model = new ParkingLot();
        this.modalRef.close();
      }
    }, (error) => {
      // this.invalidLogin = true;
      console.log('Failed!');
    });
  }

}
