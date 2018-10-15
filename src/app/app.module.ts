// Angular Import Statement
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// External Import Statement
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

// Services Import Statement
import { QuestionControlService } from './shared/services/question-control.service';
import { QuestionService } from './temp/question.service';
import { PosterService } from './services/poster.service';
import { DefaultAuthGuard } from './services/default-auth-guard.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { CategoryService } from './services/category.service';
import { AuthService } from './shared/services/auth.service';
import { ToastService } from './shared/services/toast.service';

// Pipes Import Statement
import { ReversePipe } from './shared/pipes/reverse.pipe';

// Directives Import Statement
import { ConfirmPasswordValidatorDirective } from './shared/directives/confirm-password-validator.directive';

// Components Import Statement
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { PosterCreateComponent } from './poster/poster-create/poster-create.component';
import { PosterTableComponent } from './poster/poster-table/poster-table.component';
import { PosterSearchbarComponent } from './poster/poster-searchbar/poster-searchbar.component';
import { TimePickerComponent } from './shared/components/timepicker/timepicker';
import { PosterHomeComponent } from './poster/poster-home/poster-home.component';
import { PosterDeleteModalComponent } from './poster/poster-delete-modal/poster-delete-modal.component';
import { PosterUpdateComponent } from './poster/poster-update/poster-update.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { ErrorHandlerComponent } from './shared/components/error-handler/error-handler.component';
import { ToastMessagesComponent } from './shared/components/toast-messages/toast-messages.component';
import { PosterCardComponent } from './poster/poster-card/poster-card.component';
import { PosterUploadComponent } from './poster/poster-upload/poster-upload.component';
import { DynamicFormComponent } from './temp/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './temp/dynamic-form-question/dynamic-form-question.component';

const appRouters: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'posters', component: PosterHomeComponent, canActivate: [AuthGuard, DefaultAuthGuard]},
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard, DefaultAuthGuard]},
  { path: 'no-access', component: NoAccessComponent },
  { path: 'password-reset/:username/:token', component: PasswordChangeComponent},
  { path: 'password-reset', component: PasswordResetComponent},
  { path: 'test/dynamic-form', component: DynamicFormComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmPasswordValidatorDirective,
    HomeComponent,
    NavbarComponent,
    AccountComponent,
    NoAccessComponent,
    PosterCreateComponent,
    PosterTableComponent,
    PosterSearchbarComponent,
    TimePickerComponent,
    PosterHomeComponent,
    PosterDeleteModalComponent,
    PosterUpdateComponent,
    PasswordResetComponent,
    PasswordChangeComponent,
    ErrorHandlerComponent,
    ReversePipe,
    ToastMessagesComponent,
    PosterCardComponent,
    PosterUploadComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouters),
    NgbModule.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    DefaultAuthGuard,
    { provide: ErrorHandler, useClass: ErrorHandlerComponent},
    CategoryService,
    PosterService,
    ToastService,
    QuestionService,
    QuestionControlService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PosterDeleteModalComponent,
    PosterUpdateComponent,
    PosterUploadComponent
  ]
})
export class AppModule { }
