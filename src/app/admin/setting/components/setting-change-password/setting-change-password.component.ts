import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-setting-change-password',
  templateUrl: './setting-change-password.component.html',
  styleUrls: ['./setting-change-password.component.css']
})
export class SettingChangePasswordComponent implements OnInit {

  success;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.success = undefined;
  }

  changePassword(form) {
    form.value.username = this.authService.currentUser.username;
    this.authService.resetPassword(form.value).subscribe((response) => {
      this.success = true;
    }, (error) => {
      this.success = false;
    });
  }
}
