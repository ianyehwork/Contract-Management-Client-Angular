import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './services/login-guard.service';
import { SharedModule } from '../shared/shared.module';
import { AuthHomeComponent } from './components/auth-home/auth-home.component';

const routes: Routes = [
  { path: 'login', component: AuthHomeComponent, canActivate: [LoginGuard]},
  { path: 'no-access', component: NoAccessComponent },
  { path: 'password-reset/:username/:token', component: PasswordChangeComponent},
  { path: '**', component: AuthHomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    SharedModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    NoAccessComponent,
    PasswordResetComponent,
    PasswordChangeComponent,
    AuthHomeComponent
  ]
})
export class AuthModule { }
