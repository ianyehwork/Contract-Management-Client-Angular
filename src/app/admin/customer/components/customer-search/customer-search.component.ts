import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {

  modelList: Customer[] = [];

  constructor(private activeModal: NgbActiveModal,
              private modelService: CustomerService) { }

  ngOnInit() {
  }

  search(text) {
    console.log(text);
  }

  cancel() {
    this.activeModal.close({operation: 'Cancel'});
  }

}
