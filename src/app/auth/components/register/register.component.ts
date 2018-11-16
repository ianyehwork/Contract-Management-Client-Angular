import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() tabset: NgbTabset;
  newUser = new User();
  success;
  constructor(private router: Router, private service: AuthService) { }

  ngOnInit() {
    this.success = undefined;
  }

  registerUser(regForm: NgForm) {
    this.service.register(this.newUser).subscribe(
      (response) => {
        this.success = true;
        // this.router.navigate(['login']);
      },
      (err) => {
        this.success = false;
      }
    );
  }
}
