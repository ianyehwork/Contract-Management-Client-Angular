import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmPasswordValidatorDirective } from './directives/confirm-password-validator.directive';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'no-access', component: NoAccessComponent },
  { path: 'password-reset/:username/:token', component: PasswordChangeComponent},
  { path: 'password-reset', component: PasswordResetComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    NoAccessComponent,
    PasswordResetComponent,
    PasswordChangeComponent,
    ConfirmPasswordValidatorDirective
  ]
})
export class AuthModule { }
