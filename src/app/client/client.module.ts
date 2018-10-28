import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PosterCardComponent } from './poster/components/poster-card/poster-card.component';
import { PosterCreateComponent } from './poster/components/poster-create/poster-create.component';
import { PosterDeleteModalComponent } from './poster/components/poster-delete-modal/poster-delete-modal.component';
import { PosterHomeComponent } from './poster/components/poster-home/poster-home.component';
import { PosterSearchbarComponent } from './poster/components/poster-searchbar/poster-searchbar.component';
import { PosterTableComponent } from './poster/components/poster-table/poster-table.component';
import { PosterUpdateComponent } from './poster/components/poster-update/poster-update.component';
import { PosterUploadComponent } from './poster/components/poster-upload/poster-upload.component';
import { PosterService } from './poster/services/poster.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'posters', component: PosterHomeComponent}
    ]),
    SharedModule
  ],
  declarations: [
    PosterCreateComponent,
    PosterTableComponent,
    PosterSearchbarComponent,
    PosterHomeComponent,
    PosterDeleteModalComponent,
    PosterUpdateComponent,
    PosterCardComponent,
    PosterUploadComponent,
  ],
  providers: [
    PosterService
  ],
  entryComponents: [
    PosterDeleteModalComponent,
    PosterUpdateComponent,
    PosterUploadComponent
  ]
})
export class ClientModule { }
