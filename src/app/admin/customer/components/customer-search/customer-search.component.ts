import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModelTableComponent } from '../../../../shared/components/model-table-component';
import { convertUTCDateTimeToYMD } from '../../../../shared/util/date-time-convertor';
import { Customer } from '../../models/customer';
import { CustomerTableService } from '../../services/customer-table.service';
import { CustomerEditComponent } from './../customer-edit/customer-edit.component';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent extends ModelTableComponent<Customer, CustomerTableService> implements OnInit {

  constructor(
    private activeModal: NgbActiveModal,
    service: CustomerTableService,
    modalService: NgbModal) {
    super(service, modalService, CustomerEditComponent);
    this.field = 'pContact';
    this.subscription = this.service.getModelChannel().subscribe((result) => {
      console.log(result);
      this.modelList = result.data;
      this.collectionSize = result.collectionSize;
      this.modelList.forEach((value, index, array) => {
        array[index].dateCreated = convertUTCDateTimeToYMD(array[index].dateCreated);
        array[index].dateModified = convertUTCDateTimeToYMD(array[index].dateModified);
      });
    });
  }

  ngOnInit() {
    this.refresh();
  }
  // constructor(private activeModal: NgbActiveModal,
  //   private modelService: CustomerService) { }

  // ngOnInit() {
  //   this.modelService.getAll().subscribe((result) => {
  //     this.modelList = result.data;
  //   });
  // }

  /**
   * This function is REQUIRED to fire the search request to the server
   * when the search button is clicked
   * @param text criteria
   */
  // search(text) {
  //   this.modelService.getAll(`?startWith=${text}`).subscribe((result) => {
  //     this.modelList = result.data;
  //   });
  // }

  /**
   * This function is REQUIRED to return the selected model when the users
   * double click the tables row
   * @param model the selected model
   */
  returnModel(model) {
    this.activeModal.close({ operation: 'OK', data: model });
  }

  /**
   * This function is REQUIRED when the users close the Modal
   */
  cancel() {
    this.activeModal.close({ operation: 'Cancel' });
  }

}
