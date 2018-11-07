import { CustomerTableService } from './../../services/customer-table.service';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerTableComponent } from '../customer-table/customer-table.component';

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
        this.activeModal.close({operation: 'Delete'});
      }
    }, (error) => {
      console.log('Failed!');
    });
  }

  cancel() {
    this.activeModal.close({operation: 'Cancel', data: this.model});
  }
}
