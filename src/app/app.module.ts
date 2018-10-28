import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
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
import { DefaultAuthGuard } from './auth/services/default-auth-guard.service';
import { AuthGuard } from './auth/services/auth-guard.service';
import { AuthService } from './auth/services/auth.service';

// Directives Import Statement
import { ConfirmPasswordValidatorDirective } from './auth/directives/confirm-password-validator.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components Import Statement
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { NoAccessComponent } from './auth/components/no-access/no-access.component';
import { PasswordResetComponent } from './auth/components/password-reset/password-reset.component';
import { PasswordChangeComponent } from './auth/components/password-change/password-change.component';

const appRouters: Routes = [
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
    NoAccessComponent,
    PasswordResetComponent,
    PasswordChangeComponent,
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
    ClientModule,
    AdminModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    DefaultAuthGuard
  ],
  bootstrap: [AppComponent]
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
