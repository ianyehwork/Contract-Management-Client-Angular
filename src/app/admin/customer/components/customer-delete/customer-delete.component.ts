import { CustomerService } from './../../services/customer.service';
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  @Input() model: Customer;
  
  constructor(private activeModal: NgbActiveModal,
              private modelService: CustomerService) { }

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
    this.activeModal.close({operation: 'Cancel', model: this.model});
  }

}
