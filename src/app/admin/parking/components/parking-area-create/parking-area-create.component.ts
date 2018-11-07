import { ParkingAreaService } from '../../services/parking-area.service';
import { Component, OnInit, Input } from '@angular/core';
import { ToastService, BS4AlertType } from '../../../../shared/services/toast.service';

import { ParkingArea } from '../../models/parking-area';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ParkingTableComponent } from '../parking-table/parking-table.component';
import { AppConstants } from '../../../../constants';
import { ParkingAreaTableService } from '../../services/parking-area-table.service';

@Component({
  selector: 'app-parking-area-create',
  templateUrl: './parking-area-create.component.html',
  styleUrls: ['./parking-area-create.component.css']
})
export class ParkingAreaCreateComponent implements OnInit {

  model = new ParkingArea();
  modalRef: NgbModalRef;

  constructor(private modelService: ParkingAreaService,
              private tableService: ParkingAreaTableService,
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
    this.modalRef = this.ngbService.open(template, AppConstants.MODAL_OPTIONS);
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitModel(customerForm) {
    this.modelService.create(this.model).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('停車區建立完成', BS4AlertType.SUCCESS);
        this.tableService.add(result);
        customerForm.resetForm();
        this.model = new ParkingArea();
        this.modalRef.close();
      }
    }, (error) => {
      // this.invalidLogin = true;
      console.log('Failed!');
    });
  }


}
