import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  /**
   * Check to see if the user us logged in or not.
   * @returns true if the user is logged in, false otherwise and
   * redirect user to the login page
   */
  canActivate (route, state: RouterStateSnapshot) {
    if (!this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

}
