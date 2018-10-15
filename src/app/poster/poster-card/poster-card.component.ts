import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PosterService } from '../../services/poster.service';

import { Poster } from '../../entities/poster';

import { PosterDeleteModalComponent } from '../poster-delete-modal/poster-delete-modal.component';
import { PosterUpdateComponent } from './../poster-update/poster-update.component';
import { PosterUploadComponent } from '../poster-upload/poster-upload.component';

// Environment
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: ['./poster-card.component.css']
})
export class PosterCardComponent implements OnInit {
  posterList: Poster[] = [];
  originPosterList: Poster[] = [];
  serverURL = environment.nodeServerURL;

  constructor(private posterService: PosterService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.posterService.getAll().subscribe((result) => {
      this.originPosterList = result;
      this.posterList = result;
    });
  }

  /**
   * This method is triggered when the delete icon is clicked.
   * @param poster the poster to be deleted
   */
  openDeletePosterModal(poster: Poster) {
    const modalRef = this.modalService.open(PosterDeleteModalComponent);
    // Pass poster as a Input to ModalRef
    modalRef.componentInstance.poster = poster;
    modalRef.result.then(result => {
      if (result === 'Delete') {
        this.posterService.delete(poster).subscribe((response) => {
          if (response) {
            this.posterList = this.posterList.filter((item) => {
              if (item._id !== response._id) {
                return item;
              }
            });
          }
        });
      }
    }, refused => {});
  }

  /**
   * This method is triggered when the edit icon is clicked.
   * @param poster the poster to be updated
   */
  openUpdatePosterModal(poster: Poster) {
    const modalRef = this.modalService.open(PosterUpdateComponent);
    // Pass poster as a Input to ModalRef
    modalRef.componentInstance.poster = poster;
  }

  /**
   * This method is triggered when the picture icon is clicked.
   * @param poster the poster to be uploaded
   */
  openUploadPosterModal(poster: Poster) {
    const modalRef = this.modalService.open(PosterUploadComponent);
    // Pass poster as a Input to ModalRef
    modalRef.componentInstance.poster = poster;
  }

  /**
   * This function is triggered when the user clicks the "Save" button
   * in CreatePosterComponent.
   * @param newPoster new poster created by the user
   */
  addNewPosterToCard(newPoster: Poster) {
    this.posterList.push(newPoster);
  }

  /**
   * This function is triggered when the user enters text in
   * in PosterSearchBarComponent.
   * CASE INSENSITIVE + START WITH + title
   * @param filter filter string
   */
  filterPosterInCard(filter: string) {
    if (filter.length > 0) {
      this.posterList = this.originPosterList.filter((item) => {
        if (item.title.toLowerCase().startsWith(filter.toLowerCase())) {
          return item;
        }
      });
    } else {
      this.posterList = this.originPosterList;
    }
  }
}
