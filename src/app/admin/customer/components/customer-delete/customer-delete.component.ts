import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelDeleteComponent } from '../../../../shared/components/model-delete-component';
import { ToastService } from '../../../../shared/services/toast.service';
import { Customer } from '../../models/customer';
import { CustomerTableService } from './../../services/customer-table.service';
import { CustomerService } from './../../services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent extends ModelDeleteComponent<Customer, CustomerService, CustomerTableService> implements OnInit {

  constructor(
    activeModal: NgbActiveModal,
    modelService: CustomerService,
    tableService: CustomerTableService,
    toast: ToastService) {
    super(activeModal, modelService, tableService, toast);
  }

  ngOnInit() {
  }

}
