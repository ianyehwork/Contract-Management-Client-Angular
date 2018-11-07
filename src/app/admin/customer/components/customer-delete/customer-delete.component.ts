import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Customer } from '../../models/customer';
import { CustomerTableService } from './../../services/customer-table.service';
import { CustomerService } from './../../services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  @Input() model: Customer;

  constructor(private activeModal: NgbActiveModal,
              private modelService: CustomerService,
              private tableService: CustomerTableService) { }

  ngOnInit() {
  }

  deleteModel() {
    this.modelService.delete(this.model).subscribe((response) => {
      if (response) {
        this.tableService.delete(response);
        this.activeModal.close({});
      }
    }, (error) => {
      console.log('Failed!');
    });
  }

  cancel() {
    this.activeModal.close({data: this.model});
  }
}
