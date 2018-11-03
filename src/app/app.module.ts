import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AdminAuthGuard } from './auth/services/admin-auth-guard.service';
import { AuthGuard } from './auth/services/auth-guard.service';
import { AuthService } from './auth/services/auth.service';
import { ClientModule } from './client/client.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    ClientModule,
    AdminModule,
    AuthModule,
    RouterModule.forRoot([])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// https://plmsclient.herokuapp.com/
// https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147

// 1. heroku --version
// 2. heroku login
// 3. heroku create <name>
// 4. heroku open
/**
 * 5. Move:
 * "@angular/cli": "~1.7.4",
 * "@angular/compiler-cli": "^5.2.0"
 * "typescript": "~2.5.3"
 * From devDependencies to dependencies
 *
 * 6. Add:
 * "postinstall": "ng build --prod"
 * to scripts in package.json
 */
// 7. git push heroku master
// heroku logs --tail
