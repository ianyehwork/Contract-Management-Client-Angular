import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Poster } from './../../entities/poster';

@Component({
  selector: 'app-poster-delete-modal',
  templateUrl: './poster-delete-modal.component.html',
  styleUrls: ['./poster-delete-modal.component.css']
})
export class PosterDeleteModalComponent implements OnInit {
  @Input() poster: Poster;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  deleteCurrentPoster() {
    this.activeModal.close('Delete');
  }

  cancel() {
    this.activeModal.dismiss();
  }
}
