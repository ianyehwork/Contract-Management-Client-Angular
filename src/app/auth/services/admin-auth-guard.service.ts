import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) { }

  /**
   * Check to see if the user.role is default.
   * @returns true if the user.role is default, false otherwise and
   * redirect user to the access deny page
   */
  canActivate() {
    const user = this.authService.currentUser;
    if (user && (user.role === 'admin' || user.role === 'root')) {
      return true;
    }

    this.router.navigate(['/no-access']);
  }
}
