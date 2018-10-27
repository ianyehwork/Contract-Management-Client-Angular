import { ParkingAreaService } from './../../server/parking-area.service';
import { Component, OnInit } from '@angular/core';
import { ToastService, BS4AlertType } from '../../../../shared/services/toast.service';

import { ParkingArea } from '../../models/parking-area';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-parking-area-create',
  templateUrl: './parking-area-create.component.html',
  styleUrls: ['./parking-area-create.component.css']
})
export class ParkingAreaCreateComponent implements OnInit {

  model = new ParkingArea();
  modalRef: NgbModalRef;

  constructor(private modelService: ParkingAreaService,
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
    this.modalRef = this.ngbService.open(template, { size: 'lg' });
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitCustomer(customerForm) {
    console.log(this.model);
    customerForm.resetForm();
    this.modalRef.close();
    // this.modelService.create(this.model).subscribe((result) => {
    //   if (result) {
    //     this.toast.sendMessage('Customer created successfully', BS4AlertType.SUCCESS);
    //     customerForm.resetForm();
    //     this.modalRef.close();
    //   }
    // }, (error) => {
    //   // this.invalidLogin = true;
    //   console.log('Failed!');
    // });
  }


}
