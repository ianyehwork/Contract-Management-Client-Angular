import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from '../auth/services/auth-guard.service';
import { DefaultAuthGuard } from '../auth/services/default-auth-guard.service';
import { SharedModule } from './../shared/shared.module';
import { ContractHomeComponent } from './contract/components/contract-home/contract-home.component';
import { CustomerCreateComponent } from './customer/components/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/components/customer-edit/customer-edit.component';
import { CustomerHomeComponent } from './customer/components/customer-home/customer-home.component';
import { CustomerTableComponent } from './customer/components/customer-table/customer-table.component';
import { CustomerService } from './customer/services/customer.service';
import { DashboardHomeComponent } from './dashboard/components/dashboard-home/dashboard-home.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParkingAreaCreateComponent } from './parking/components/parking-area-create/parking-area-create.component';
import { ParkingHomeComponent } from './parking/components/parking-home/parking-home.component';
import { ParkingTableComponent } from './parking/components/parking-table/parking-table.component';
import { ParkingAreaService } from './parking/server/parking-area.service';
import { ReportHomeComponent } from './report/components/report-home/report-home.component';
import { SettingHomeComponent } from './setting/components/setting-home/setting-home.component';

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
    CustomerEditComponent
  ],
  providers: [
    CustomerService,
    ParkingAreaService
  ],
  entryComponents: [
    CustomerEditComponent
  ]
})
export class AdminModule { }
