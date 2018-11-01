import { Payment } from './../../models/payment';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../../services/payment.service';
import { Contract } from '../../models/contract';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {

  @Input() contract: Contract;
  model = new Payment();

  constructor(private activeModal: NgbActiveModal,
              private modelService: PaymentService) { }

  ngOnInit() {
  }

  /**
   * This function is REQUIRED when the users close the Modal
   */
  cancel() {
    this.activeModal.close({operation: 'Cancel', contract: this.contract});
  }

  /**
   * This function is REQUIRED to submit the data to the server
   * when the "save" button is clicked.
   * @param customerForm the form content
   */
  submitModel(customerForm) {
    this.model._contract = this.contract._id;
    this.modelService.create(this.model).subscribe((result) => {
      if (result) {
        // this.table.addNewModel(result);
        customerForm.resetForm();
        this.activeModal.close({operation: 'OK', data: result, contract: this.contract});
      }
    }, (error) => {
      // this.invalidLogin = true;
      console.log('Failed!');
    });
  }

}
