import { CustomerService } from './../../../customer/services/customer.service';
import { Customer } from './../../../customer/models/customer';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerSearchComponent } from '../../../customer/components/customer-search/customer-search.component';
import { AppConstants } from '../../../../constants';
import { UnauthorizeError } from '../../../../shared/models/unauthorize-error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-customer-token',
  templateUrl: './setting-customer-token.component.html',
  styleUrls: ['./setting-customer-token.component.css']
})
export class SettingCustomerTokenComponent implements OnInit {

  constructor(
    private ngbService: NgbModal,
    private service: CustomerService,
    private router: Router
  ) { }

  _customer: Customer;
  token: string;

  ngOnInit() {
    this._customer = new Customer();
    this.token = undefined;
  }

  /**
   * This function is triggered when the user clicks the table row
   * to edit the model.
   */
  searchCustomer() {
    const modalRef = this.ngbService.open(CustomerSearchComponent, AppConstants.MODAL_OPTIONS);

    modalRef.result.then(result => {
      if (result.operation === 'OK') {
        this._customer = result.data;
      }
    }, refused => { });
  }

  createCustomerToken() {
    this.service.createCustomerToken(this._customer).subscribe((result) => {
      this.token = result.token;
    }, (error) => {
      if (error instanceof UnauthorizeError) {
        this.router.navigate(['/'], { replaceUrl: true });
      }
      console.log('無法生成令牌');
    });
  }
}
