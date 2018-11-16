import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  public formModel: FormModel = {};

  /**
   * This field is used to disable the
   * Send password reset email button
   */
  submitted: Boolean = false;
  success;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.success = undefined;
  }

  resetPassword(value) {
    this.submitted = true;
    this.authService.resetPassword(value).subscribe((response) => {
      this.success = true;
    }, (err) => {
      this.success = false;
    });
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
}

