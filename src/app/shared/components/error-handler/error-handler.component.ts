import { ToastService, BS4AlertType } from '../../services/toast.service';
import { BadInputError } from '../../models/bad-input-error';
import { NotFoundError } from '../../models/not-found-error';
import { Component, OnInit, ErrorHandler, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-error-handler',
  template: ''
})
export class ErrorHandlerComponent implements OnInit, ErrorHandler {

  constructor(private toast: ToastService) {
  }

  ngOnInit() {
  }

  /**
    * Handle the unexpected error occurs in the application
    * @param error the error object
    */
  handleError(error) {

    // TODO: In the future, the error should be logged in the
    // database on the server.
    if (error instanceof NotFoundError) {
      this.toast.sendMessage('Requested resource cannot be found.', BS4AlertType.WARNING);
    } else if (error instanceof BadInputError) {
      this.toast.sendMessage('Input is invalid.', BS4AlertType.DANGER);
      console.log(error);
    } else {
      this.toast.sendMessage('An unexpected error occurred.', BS4AlertType.DANGER);
      console.log(error);
    }
  }

}
