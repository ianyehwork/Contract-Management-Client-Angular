import { SharedModule } from './shared/shared.module';
// Angular Import Statement
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// External Import Statement
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

// Services Import Statement
import { PosterService } from './client/poster/services/poster.service';
import { DefaultAuthGuard } from './auth/services/default-auth-guard.service';
import { AuthGuard } from './auth/services/auth-guard.service';
import { AuthService } from './auth/services/auth.service';
import { CustomerService } from './admin/customer/services/customer.service';
import { ParkingAreaService } from './admin/parking/server/parking-area.service';

// Directives Import Statement
import { ConfirmPasswordValidatorDirective } from './auth/directives/confirm-password-validator.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components Import Statement
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './admin/home/home.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { NoAccessComponent } from './auth/components/no-access/no-access.component';
import { PosterCreateComponent } from './client/poster/components/poster-create/poster-create.component';
import { PosterTableComponent } from './client/poster/components/poster-table/poster-table.component';
import { PosterSearchbarComponent } from './client/poster/components/poster-searchbar/poster-searchbar.component';
import { PosterHomeComponent } from './client/poster/components/poster-home/poster-home.component';
import { PosterDeleteModalComponent } from './client/poster/components/poster-delete-modal/poster-delete-modal.component';
import { PosterUpdateComponent } from './client/poster/components/poster-update/poster-update.component';
import { PasswordResetComponent } from './auth/components/password-reset/password-reset.component';
import { PasswordChangeComponent } from './auth/components/password-change/password-change.component';
import { PosterCardComponent } from './client/poster/components/poster-card/poster-card.component';
import { PosterUploadComponent } from './client/poster/components/poster-upload/poster-upload.component';
import { DashboardHomeComponent } from './admin/dashboard/components/dashboard-home/dashboard-home.component';
import { CustomerHomeComponent } from './admin/customer/components/customer-home/customer-home.component';
import { ContractHomeComponent } from './admin/contract/components/contract-home/contract-home.component';
import { ReportHomeComponent } from './admin/report/components/report-home/report-home.component';
import { SettingHomeComponent } from './admin/setting/components/setting-home/setting-home.component';
import { CustomerCreateComponent } from './admin/customer/components/customer-create/customer-create.component';
import { ParkingHomeComponent } from './admin/parking/components/parking-home/parking-home.component';
import { ParkingAreaCreateComponent } from './admin/parking/components/parking-area-create/parking-area-create.component';
import { CustomerTableComponent } from './admin/customer/components/customer-table/customer-table.component';
import { ParkingTableComponent } from './admin/parking/components/parking-table/parking-table.component';
import { CustomerEditComponent } from './admin/customer/components/customer-edit/customer-edit.component';

const appRouters: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard, DefaultAuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardHomeComponent,
        outlet: 'admin'
      },
      {
        path: 'parking',
        component: ParkingHomeComponent,
        outlet: 'admin'
      },
      {
        path: 'customer',
        component: CustomerHomeComponent,
        outlet: 'admin'
      },
      {
        path: 'contract',
        component: ContractHomeComponent,
        outlet: 'admin'
      },
      {
        path: 'report',
        component: ReportHomeComponent,
        outlet: 'admin'
      },
      {
        path: 'setting',
        component: SettingHomeComponent,
        outlet: 'admin'
      }
    ]
  },
  { path: 'posters', component: PosterHomeComponent, canActivate: [AuthGuard, DefaultAuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'no-access', component: NoAccessComponent },
  { path: 'password-reset/:username/:token', component: PasswordChangeComponent},
  { path: 'password-reset', component: PasswordResetComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmPasswordValidatorDirective,
    HomeComponent,
    NavbarComponent,
    NoAccessComponent,
    PosterCreateComponent,
    PosterTableComponent,
    PosterSearchbarComponent,
    PosterHomeComponent,
    PosterDeleteModalComponent,
    PosterUpdateComponent,
    PasswordResetComponent,
    PasswordChangeComponent,
    PosterCardComponent,
    PosterUploadComponent,
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
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    DefaultAuthGuard,
    PosterService,
    CustomerService,
    ParkingAreaService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PosterDeleteModalComponent,
    PosterUpdateComponent,
    PosterUploadComponent,
    CustomerEditComponent
  ]
})
export class AppModule { }
// https://plmsclient.herokuapp.com/
// https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147

// 1. heroku --version
// 2. heroku login
// 3. heroku create <name>
// 4. heroku open
/**
 * 5. Move:
 * "@angular/cli": "~1.7.4",
 * "@angular/compiler-cli": "^5.2.0"
 * "typescript": "~2.5.3"
 * From devDependencies to dependencies
 *
 * 6. Add:
 * "postinstall": "ng build --prod"
 * to scripts in package.json
 */
// 7. git push heroku master
// heroku logs --tail
