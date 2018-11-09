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

  /**
   * Used for pagination
   */
  page: number;
  pageSize = 15;
  /**
   * This function is used for pagination
   */
  onPageChange() {
    // TODO
    console.log(this.page);
  }

  constructor(private activeModal: NgbActiveModal,
    private modelService: CustomerService) { }

  ngOnInit() {
    this.modelService.getAll().subscribe((result) => {
      this.modelList = result.data;
    });
  }

  /**
   * This function is REQUIRED to fire the search request to the server
   * when the search button is clicked
   * @param text criteria
   */
  search(text) {
    this.modelService.getAll(`?startWith=${text}`).subscribe((result) => {
      this.modelList = result.data;
    });
  }

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
