import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { UnauthorizeError } from '../../../../shared/models/unauthorize-error';

@Component({
  selector: 'app-setting-change-password',
  templateUrl: './setting-change-password.component.html',
  styleUrls: ['./setting-change-password.component.css']
})
export class SettingChangePasswordComponent implements OnInit {

  success;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.success = undefined;
  }

  changePassword(form) {
    form.value.username = this.authService.currentUser.username;
    this.authService.resetPassword(form.value).subscribe((response) => {
      this.success = true;
    }, (error) => {
      if (error instanceof UnauthorizeError) {
        this.router.navigate(['/'], { replaceUrl: true });
      }
      this.success = false;
    });
  }
}
