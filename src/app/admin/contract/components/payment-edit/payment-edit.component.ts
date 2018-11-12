import { Payment } from './../../models/payment';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from '../../services/payment.service';
import { Contract } from '../../models/contract';

@Component({
  selector: 'app-payment-edit',
  templateUrl: './payment-edit.component.html',
  styleUrls: ['./payment-edit.component.css']
})
export class PaymentEditComponent implements OnInit {

  @Input() contract: Contract;
  @Input() model: Payment;
  originalAmount: number;

  constructor(private activeModal: NgbActiveModal,
              private modelService: PaymentService) { }

  ngOnInit() {
    this.modelService.getById(this.model._id).subscribe((response) => {
      this.model = response;
      this.originalAmount = response.amount;
    });
  }

  updateModel() {
    this.modelService.update(this.model).subscribe((result) => {
      if (result) {
        this.activeModal.close({operation: 'Update', contract: this.contract, payment: result});
      }
    });
  }

  cancel() {
    this.activeModal.close({operation: 'Cancel', contract: this.contract});
  }

}
