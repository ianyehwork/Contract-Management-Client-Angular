import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser = new User();

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit() {
  }

  registerUser(regForm: NgForm) {
    this.service.register(this.newUser).subscribe(
      (response) => {
        this.router.navigate(['login']);
      }
    );
  }
}
