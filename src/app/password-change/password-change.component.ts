import { AuthService } from '../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  /**
   * This field is used to disable the save button
   */
  submitted: Boolean = false;

  /**
   * This field is used to display password save message
   */
  success: Boolean = undefined;

  private username: string;
  private token: string;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.username = params.get('username');
      this.token = params.get('token');
    });
  }

  changePassword(value) {
    this.submitted = true;
    value.username = this.username;
    value.token = this.token;
    this.authService.resetPassword(value).subscribe((response) => {
      this.success = (response.status === 200);
    }, (error) => {
      this.success = false;
    });
  }
}
