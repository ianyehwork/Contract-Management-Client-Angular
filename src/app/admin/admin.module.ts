import { PaymentService } from './contract/services/payment.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from '../auth/services/auth-guard.service';
import { DefaultAuthGuard } from '../auth/services/default-auth-guard.service';
import { SharedModule } from './../shared/shared.module';
import { ContractCreateComponent } from './contract/components/contract-create/contract-create.component';
import { ContractEditComponent } from './contract/components/contract-edit/contract-edit.component';
import { ContractHomeComponent } from './contract/components/contract-home/contract-home.component';
import { ContractTableComponent } from './contract/components/contract-table/contract-table.component';
import { ContractService } from './contract/services/contract.service';
import { CustomerCreateComponent } from './customer/components/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/components/customer-edit/customer-edit.component';
import { CustomerHomeComponent } from './customer/components/customer-home/customer-home.component';
import { CustomerTableComponent } from './customer/components/customer-table/customer-table.component';
import { CustomerService } from './customer/services/customer.service';
import { DashboardHomeComponent } from './dashboard/components/dashboard-home/dashboard-home.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingAreaCreateComponent } from './parking/components/parking-area-create/parking-area-create.component';
import { ParkingAreaEditComponent } from './parking/components/parking-area-edit/parking-area-edit.component';
import { ParkingHomeComponent } from './parking/components/parking-home/parking-home.component';
import { ParkingLotCreateComponent } from './parking/components/parking-lot-create/parking-lot-create.component';
import { ParkingLotEditComponent } from './parking/components/parking-lot-edit/parking-lot-edit.component';
import { ParkingLotTableComponent } from './parking/components/parking-lot-table/parking-lot-table.component';
import { ParkingTableComponent } from './parking/components/parking-table/parking-table.component';
import { ParkingAreaService } from './parking/services/parking-area.service';
import { ParkingLotService } from './parking/services/parking-lot.service';
import { ReportHomeComponent } from './report/components/report-home/report-home.component';
import { SettingHomeComponent } from './setting/components/setting-home/setting-home.component';
import { CustomerSearchComponent } from './customer/components/customer-search/customer-search.component';
import { ParkingLotSearchComponent } from './parking/components/parking-lot-search/parking-lot-search.component';
import { PaymentCreateComponent } from './contract/components/payment-create/payment-create.component';
import { PaymentTableComponent } from './contract/components/payment-table/payment-table.component';
import { PaymentEditComponent } from './contract/components/payment-edit/payment-edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard, DefaultAuthGuard],
    children: [
      { path: 'dashboard', component: DashboardHomeComponent, outlet: 'admin' },
      { path: 'parking', component: ParkingHomeComponent, outlet: 'admin' },
      { path: 'customer', component: CustomerHomeComponent, outlet: 'admin' },
      { path: 'contract', component: ContractHomeComponent, outlet: 'admin' },
      { path: 'report', component: ReportHomeComponent, outlet: 'admin' },
      { path: 'setting', component: SettingHomeComponent, outlet: 'admin'}
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
    PaymentEditComponent
  ],
  providers: [
    CustomerService,
    ParkingAreaService,
    ParkingLotService,
    ContractService,
    PaymentService
  ],
  entryComponents: [
    CustomerEditComponent,
    ParkingAreaEditComponent,
    ParkingLotEditComponent,
    CustomerSearchComponent,
    ParkingLotSearchComponent,
    ContractEditComponent,
    PaymentCreateComponent
  ]
})
export class AdminModule { }
