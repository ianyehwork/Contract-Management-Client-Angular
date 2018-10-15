import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Model
import { User } from '../models/user';
// Error Classes
import { BadInputError } from '../../shared/models/bad-input-error';
import { NotFoundError } from '../../shared/models/not-found-error';
import { AppError } from '../../shared/models/app-error';
// Error Handling
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// JWT
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
// Environment
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  private API_URL = environment.nodeServerURL;
  private STORAGE_TOKEN_KEY = 'token';
  private HEADER_TOKEN_NAME = 'x-auth';

  constructor(private http: HttpClient) {
  }

  /**
   * Send the reset password request to the server
   * @param data contains 'username', 'password', 'token'
   */
  resetPassword(data: any) {
    return this.http.post(`${this.API_URL}/users/password/reset`, data, {observe: 'response'})
                    .catch(this.handlerError);
  }

  /**
   * Send the create user request to the server
   * @param user user information
   */
  register(user: User) {
    return this.http.post(`${this.API_URL}/users`, user, {observe: 'response'})
                    .catch(this.handlerError);
  }

  /**
   * Send the login request to the server
   * @param credentials the credentials include username and password fields
   * @returns true if the credential is correct, false otherwise
   */
  login(credentials) {
   return this.http.post(`${this.API_URL}/users/login`, credentials, {observe: 'response'})
                   .map((response) => {
                    if (response.status === 200) {
                      localStorage.setItem(this.STORAGE_TOKEN_KEY, response.headers.get(this.HEADER_TOKEN_NAME));
                      return true;
                    }
                    return false;
                  }, (error) => {
                    return false;
                  });
  }

  /**
   * Delete the jwt token from user's local storage
   */
  logout() {
    const token = localStorage.getItem(this.STORAGE_TOKEN_KEY);
    if (!token) {
      return null;
    }
    localStorage.removeItem(this.STORAGE_TOKEN_KEY);
    this.http.delete(`${this.API_URL}/users/me/token`, {
      headers: {
        'x-auth': token
      },
      observe: 'response'
    }).subscribe((result) => {
      // console.log(result);
    });
  }

  /**
   * The user is logged in if the token exists and not expired
   * @return true is the user is logged in, false otherwise
   */
  isLoggedIn() {
    return tokenNotExpired();
    // const jwtHelper = new JwtHelper();
    // const token = localStorage.getItem(this.STORAGE_TOKEN_KEY);
    // if (!token) {
    //   return false;
    // }
    // const expirationDate = jwtHelper.getTokenExpirationDate(token);
    // const isExpired = jwtHelper.isTokenExpired(token);
    // return !isExpired;
  }

  /**
   * Retrieve the Javascript Object representing the user.
   * {
   *    _id: "5aef619e84f7bd00148213d7",
   *    role: "default",
   *    access: "auth",
   *    exp: 1525666358,
   *    iat: 1525637558
   * }
   */
  get currentUser(): UserAuthProperties {
    const token = localStorage.getItem(this.STORAGE_TOKEN_KEY);
    if (!token) {
      return null;
    }
    return new JwtHelper().decodeToken(token);
  }

  get token(): string {
    const token = localStorage.getItem(this.STORAGE_TOKEN_KEY);
    return (!token) ? '' : token;
  }

  get authHeader(): any {
    const header = {
      headers: {
        'x-auth': this.token
      }
    };

    return header;
  }

  private handlerError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    } else if (error.status === 400) {
      return Observable.throw(new BadInputError());
    }
    return Observable.throw(new AppError(error));
  }
}

interface UserAuthProperties {
  role: string;
  access: string;
}

