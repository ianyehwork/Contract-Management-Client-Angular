import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AuthGuard } from '../auth/services/auth-guard.service';
import { StartsWithPipe } from '../shared/pipe/starts-with.pipe';
import { SharedModule } from './../shared/shared.module';
import { ContractCreateComponent } from './contract/components/contract-create/contract-create.component';
import { ContractDeleteComponent } from './contract/components/contract-delete/contract-delete.component';
import { ContractEditComponent } from './contract/components/contract-edit/contract-edit.component';
import { ContractHomeComponent } from './contract/components/contract-home/contract-home.component';
import { ContractTableComponent } from './contract/components/contract-table/contract-table.component';
import { PaymentCreateComponent } from './contract/components/payment-create/payment-create.component';
import { PaymentEditComponent } from './contract/components/payment-edit/payment-edit.component';
import { PaymentTableComponent } from './contract/components/payment-table/payment-table.component';
import { ContractTableService } from './contract/services/contract-table.service';
import { ContractService } from './contract/services/contract.service';
import { PaymentCalendarService } from './contract/services/payment-calendar.service';
import { PaymentTableService } from './contract/services/payment-table.service';
import { PaymentService } from './contract/services/payment.service';
import { CustomerCreateComponent } from './customer/components/customer-create/customer-create.component';
import { CustomerDeleteComponent } from './customer/components/customer-delete/customer-delete.component';
import { CustomerEditComponent } from './customer/components/customer-edit/customer-edit.component';
import { CustomerHomeComponent } from './customer/components/customer-home/customer-home.component';
import { CustomerSearchComponent } from './customer/components/customer-search/customer-search.component';
import { CustomerTableComponent } from './customer/components/customer-table/customer-table.component';
import { CustomerTableService } from './customer/services/customer-table.service';
import { CustomerService } from './customer/services/customer.service';
import { ActiveParkingLotTableComponent } from './dashboard/components/active-parking-lot-table/active-parking-lot-table.component';
import { ActivePaymentTableComponent } from './dashboard/components/active-payment-table/active-payment-table.component';
import { DashboardHomeComponent } from './dashboard/components/dashboard-home/dashboard-home.component';
import { PaymentCalendarComponent } from './dashboard/components/payment-calendar/payment-calendar.component';
import { HomeComponent } from './home/home.component';
import { IncomeGraphComponent } from './dashboard/components/income-graph/income-graph.component';
import { IncomeHomeComponent } from './income/components/income-home/income-home.component';
import { IncomeTableComponent } from './income/components/income-table/income-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingAreaCreateComponent } from './parking/components/parking-area-create/parking-area-create.component';
import { ParkingAreaDeleteComponent } from './parking/components/parking-area-delete/parking-area-delete.component';
import { ParkingAreaEditComponent } from './parking/components/parking-area-edit/parking-area-edit.component';
import { ParkingHomeComponent } from './parking/components/parking-home/parking-home.component';
import { ParkingLotCreateComponent } from './parking/components/parking-lot-create/parking-lot-create.component';
import { ParkingLotDeleteComponent } from './parking/components/parking-lot-delete/parking-lot-delete.component';
import { ParkingLotEditComponent } from './parking/components/parking-lot-edit/parking-lot-edit.component';
import { ParkingLotSearchComponent } from './parking/components/parking-lot-search/parking-lot-search.component';
import { ParkingLotTableComponent } from './parking/components/parking-lot-table/parking-lot-table.component';
import { ParkingTableComponent } from './parking/components/parking-table/parking-table.component';
import { ParkingAreaTableService } from './parking/services/parking-area-table.service';
import { ParkingAreaService } from './parking/services/parking-area.service';
import { ParkingLotTableService } from './parking/services/parking-lot-table.service';
import { ParkingLotService } from './parking/services/parking-lot.service';
import { ReportHomeComponent } from './report/components/report-home/report-home.component';
import { ReportService } from './report/services/report.service';
import { IncomeGraphService } from './dashboard/services/income-graph.service';
import { SettingChangePasswordComponent } from './setting/components/setting-change-password/setting-change-password.component';
import { SettingHomeComponent } from './setting/components/setting-home/setting-home.component';
import { SettingTabsetComponent } from './setting/components/setting-tabset/setting-tabset.component';
import { SettingCustomerTokenComponent } from './setting/components/setting-customer-token/setting-customer-token.component';
import { AdminAuthGuard } from '../auth/services/admin-auth-guard.service';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard, AdminAuthGuard],
    children: [
      { path: '', component: DashboardHomeComponent, outlet: 'admin' },
      { path: 'dashboard', component: DashboardHomeComponent, outlet: 'admin' },
      { path: 'parking', component: ParkingHomeComponent, outlet: 'admin' },
      { path: 'customer', component: CustomerHomeComponent, outlet: 'admin' },
      { path: 'contract', component: ContractHomeComponent, outlet: 'admin' },
      { path: 'income', component: IncomeHomeComponent, outlet: 'admin' },
      { path: 'report', component: ReportHomeComponent, outlet: 'admin' },
      { path: 'setting', component: SettingHomeComponent, outlet: 'admin' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    DashboardHomeComponent,
    ParkingHomeComponent,
    CustomerHomeComponent,
    CustomerCreateComponent,
    ContractHomeComponent,
    ReportHomeComponent,
    SettingHomeComponent,
    ParkingAreaCreateComponent,
    CustomerTableComponent,
    ParkingTableComponent,
    CustomerEditComponent,
    ParkingAreaEditComponent,
    ParkingLotCreateComponent,
    ParkingLotTableComponent,
    ParkingLotEditComponent,
    ContractCreateComponent,
    ContractEditComponent,
    ContractTableComponent,
    CustomerSearchComponent,
    ParkingLotSearchComponent,
    PaymentCreateComponent,
    PaymentTableComponent,
    PaymentEditComponent,
    PaymentCalendarComponent,
    ActivePaymentTableComponent,
    ActiveParkingLotTableComponent,
    StartsWithPipe,
    CustomerDeleteComponent,
    ParkingLotDeleteComponent,
    ParkingAreaDeleteComponent,
    ContractDeleteComponent,
    IncomeGraphComponent,
    IncomeHomeComponent,
    IncomeTableComponent,
    SettingTabsetComponent,
    SettingChangePasswordComponent,
    SettingCustomerTokenComponent
  ],
  providers: [
    CustomerService,
    ParkingAreaService,
    ParkingLotService,
    ContractService,
    PaymentService,
    ParkingLotTableService,
    ContractTableService,
    ReportService,
    IncomeGraphService,
    CustomerTableService,
    ParkingAreaTableService,
    PaymentTableService,
    PaymentCalendarService
  ],
  entryComponents: [
    CustomerEditComponent,
    CustomerDeleteComponent,
    ParkingAreaEditComponent,
    ParkingAreaDeleteComponent,
    ParkingLotEditComponent,
    ParkingLotDeleteComponent,
    CustomerSearchComponent,
    ParkingLotSearchComponent,
    ContractEditComponent,
    PaymentCreateComponent,
    PaymentEditComponent,
    ContractDeleteComponent
  ]
})
export class AdminModule { }
