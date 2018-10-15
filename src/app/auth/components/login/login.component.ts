import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  invalidLogin: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {}

  ngOnInit() {
  }

  login(credentials) {
    this.authService.login(credentials).subscribe((result) => {
      if (result) {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || 'home']);
      }
    }, (error) => {
      this.invalidLogin = true;
    });
  }
}
