import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { convertUTCDateTimeToYMD } from '../../../../shared/util/date-time-convertor';
import { ModelTableComponent } from '../../../../shared/components/model-table-component';
import { Customer } from '../../models/customer';
import { CustomerTableService } from './../../services/customer-table.service';
import { CustomerEditComponent } from './../customer-edit/customer-edit.component';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent extends ModelTableComponent<Customer, CustomerTableService> implements OnInit {

  constructor(service: CustomerTableService,
              modalService: NgbModal) {
    super(service, modalService, CustomerEditComponent);
  }

  ngOnInit() {
    this.field = 'pContact';
    this.service.getModelChannel().subscribe((result) => {
      this.modelList = result;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
        array[index].dateModified = convertUTCDateTimeToYMD(array[index].dateModified);
      });
    });
  }

}
