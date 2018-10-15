import { HttpClient } from '@angular/common/http';
import { Poster } from '../models/poster';
import { DataService } from '../../../shared/services/data.service';
import { Injectable } from '@angular/core';

import { AuthService } from '../../../auth/services/auth.service';

// Environment
import { environment } from '../../../../environments/environment';

@Injectable()
export class PosterService extends DataService <Poster> {
  constructor(http: HttpClient, authService: AuthService) {
    super(environment.nodeServerURL + '/posters', http, authService);
  }

  uploadImage(poster: Poster, data: FormData) {
    return this.http.post(this.url + '/uploads/' + poster._id, data, this.authService.authHeader)
                      .catch(this.handleError);
  }
}
