import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { AppConstants } from '../../../../constants';
import { BS4AlertType, ToastService } from '../../../../shared/services/toast.service';
import { ParkingArea } from '../../models/parking-area';
import { ParkingLot } from '../../models/parking-lot';
import { ParkingLotService } from '../../services/parking-lot.service';
import { ParkingLotTableService } from '../../services/parking-lot-table.service';

@Component({
  selector: 'app-parking-lot-create',
  templateUrl: './parking-lot-create.component.html',
  styleUrls: ['./parking-lot-create.component.css']
})
export class ParkingLotCreateComponent implements OnInit {
  @Input() area: ParkingArea;

  model = new ParkingLot();
  modalRef: NgbModalRef;

  constructor(private modelService: ParkingLotService,
              private tableService: ParkingLotTableService,
              private ngbService: NgbModal,
              private toast: ToastService,
              ) { }

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
    this.model.identifier = this.area.identifier;
    this.modalRef = this.ngbService.open(template, AppConstants.MODAL_OPTIONS);
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitModel(customerForm) {
    this.model._area = this.area;
    this.modelService.create(this.model).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('停車位建立完成', BS4AlertType.SUCCESS);
        this.tableService.add(result);
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
