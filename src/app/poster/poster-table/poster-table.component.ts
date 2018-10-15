import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PosterService } from '../../services/poster.service';

import { Poster } from '../../entities/poster';

import { PosterDeleteModalComponent } from '../poster-delete-modal/poster-delete-modal.component';
import { PosterUpdateComponent } from './../poster-update/poster-update.component';

@Component({
  selector: 'app-poster-table',
  templateUrl: './poster-table.component.html',
  styleUrls: ['./poster-table.component.css']
})
export class PosterTableComponent implements OnInit {
  posterList: Poster[] = [];
  originPosterList: Poster[] = [];

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
   * This method is triggered when the delete icon is clicked.
   * @param poster the poster to be deleted
   */
  openUpdatePosterModal(poster: Poster) {
    const modalRef = this.modalService.open(PosterUpdateComponent);
    // Pass poster as a Input to ModalRef
    modalRef.componentInstance.poster = poster;
  }

  /**
   * This function is triggered when the user clicks the "Save" button
   * in CreatePosterComponent.
   * @param newPoster new poster created by the user
   */
  addNewPosterToTable(newPoster: Poster) {
    this.posterList.push(newPoster);
  }

  /**
   * This function is triggered when the user enters text in
   * in PosterSearchBarComponent.
   * CASE INSENSITIVE + START WITH + title
   * @param filter filter string
   */
  filterPosterInTable(filter: string) {
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
