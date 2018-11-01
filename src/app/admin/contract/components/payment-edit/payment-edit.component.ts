import { Payment } from './../../models/payment';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.css']
})
export class PaymentEditComponent implements OnInit {

  @Input() model: Payment;
  originalModel: Payment;

  constructor(private activeModal: NgbActiveModal,
              private modelService: PaymentService) { }

  ngOnInit() {
    this.modelService.getById(this.model._id).subscribe((response) => {
      this.model = response;
      this.originalModel = response;
    });
  }

  updateModel() {
    this.modelService.update(this.model).subscribe((result) => {
      if (result) {
        this.activeModal.close({operation: 'Update', data: result});
      }
    });
  }

  deleteModel() {
    this.modelService.delete(this.model).subscribe((response) => {
      if (response) {
        this.activeModal.close({operation: 'Delete', data: response});
      }
    });
  }

  cancel() {
    this.model = this.originalModel;
    this.activeModal.dismiss();
  }

}
