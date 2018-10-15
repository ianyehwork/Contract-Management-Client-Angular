import { Category } from './../entities/category';
import { Injectable } from '@angular/core';
import { ConstantsService } from '../shared/services/constants.service';
import { HttpClient } from '@angular/common/http';

// Environment
import { environment } from './../../environments/environment';

@Injectable()
export class CategoryService extends ConstantsService <Category> {

  constructor(http: HttpClient) {
    // fake url
    super(environment.nodeServerURL, http);
  }
}
