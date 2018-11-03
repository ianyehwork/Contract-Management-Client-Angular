import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';

import { AppError } from '../../../shared/models/app-error';
import { BadInputError } from '../../../shared/models/bad-input-error';
import { NotFoundError } from '../../../shared/models/not-found-error';

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
