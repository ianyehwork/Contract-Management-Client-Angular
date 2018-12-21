import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() tabset: NgbTabset;
  user: User = new User();

  invalidLogin: boolean;
  extraToken: boolean;
  isLoading = false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {}

  ngOnInit() {
  }

  login(credentials) {
    this.isLoading = true;
    this.authService.login(credentials).subscribe((result) => {
      if (result === 'OK') {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || 'home']);
      } else if (result === '2FA') {
        this.extraToken = true;
      }
      this.isLoading = false;
    }, (error) => {
      this.invalidLogin = true;
      this.isLoading = false;
    });
  }
}
