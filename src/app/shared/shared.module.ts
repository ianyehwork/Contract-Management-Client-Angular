import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { NgbModule, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { TimePickerComponent } from './components/timepicker/timepicker';
import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';
import { ToastService } from './services/toast.service';
import { ConfirmPasswordValidatorDirective } from './directives/confirm-password-validator.directive';
import { NgbdatepickerI18Chinese } from './services/ngbdatepicker-i18-chinese.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    TimePickerComponent,
    ErrorHandlerComponent,
    ToastMessagesComponent,
    ConfirmPasswordValidatorDirective
  ],
  providers: [
    ToastService,
    NgbdatepickerI18Chinese,
    { provide: NgbDatepickerI18n, useClass: NgbdatepickerI18Chinese},
    { provide: ErrorHandler, useClass: ErrorHandlerComponent}
  ],
  exports: [
    TimePickerComponent,
    ToastMessagesComponent,
    ConfirmPasswordValidatorDirective
  ]
})
export class SharedModule { }
