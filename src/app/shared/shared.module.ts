import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { TimePickerComponent } from './components/timepicker/timepicker';
import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';
import { ToastService } from './services/toast.service';
import { ConfirmPasswordValidatorDirective } from './directives/confirm-password-validator.directive';

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
    { provide: ErrorHandler, useClass: ErrorHandlerComponent}
  ],
  exports: [
    TimePickerComponent,
    ToastMessagesComponent,
    ConfirmPasswordValidatorDirective
  ]
})
export class SharedModule { }
