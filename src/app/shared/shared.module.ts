import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { TimePickerComponent } from './components/timepicker/timepicker';
import { ToastMessagesComponent } from './components/toast-messages/toast-messages.component';
import { ToastService } from './services/toast.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [
    TimePickerComponent,
    ErrorHandlerComponent,
    ToastMessagesComponent
  ],
  providers: [
    ToastService,
    { provide: ErrorHandler, useClass: ErrorHandlerComponent}
  ],
  exports: [
    TimePickerComponent,
    ToastMessagesComponent
  ]
})
export class SharedModule { }
