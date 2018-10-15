import { ToastService, BS4AlertType } from '../../../../shared/services/toast.service';
import { PosterCardComponent } from '../poster-card/poster-card.component';
import { PosterService } from '../../services/poster.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Poster } from '../../models/poster';
import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';
import { convertDateTimeToNumber } from '../../../../shared/util/date-time-convertor';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poster-create',
  templateUrl: './poster-create.component.html',
  styleUrls: ['./poster-create.component.css']
})
export class PosterCreateComponent implements OnInit {

  @Input() posterCard: PosterCardComponent;

  newPoster = new Poster();
  categories: string[];
  modalRef: NgbModalRef;

  constructor(private categoryService: CategoryService,
              private posterService: PosterService,
              private modalService: NgbModal,
              private toast: ToastService) { }

  ngOnInit() {
    this.setCategories();
  }

  open(createPoster) {
    this.modalRef = this.modalService.open(createPoster, { size: 'lg' });
  }

  setCategories() {
    // this.categoryService.fetchAll()
    //                     .subscribe(resp => this.categories = resp);

    // for dev purpose
    this.categories = [
      'Job',
      'Eat',
      'Dating'
    ];
  }

  /**
   * This function is triggerted when the "save" button is clicked.
   * @param posterForm the form content
   */
  submitPoster(posterForm) {
    const date = posterForm.value.date;
    this.newPoster.startTime = _.toString(convertDateTimeToNumber(date, this.newPoster.startTime));
    this.newPoster.endTime = _.toString(convertDateTimeToNumber(date, this.newPoster.endTime));
    this.posterService.create(this.newPoster).subscribe((result) => {
      if (result) {
        this.toast.sendMessage('Poster created successfully', BS4AlertType.SUCCESS);
        this.posterCard.addNewPosterToCard(result);
        posterForm.resetForm();
        this.modalRef.close();
      }
    }, (error) => {
      // this.invalidLogin = true;
      console.log('Failed!');
    });
  }

  /**
   * This function is triggered when the users pick/change the time
   * inside <app-time-picker>.
   * @param value new time value entered by the user
   */
  onStartTimeChanged(value) {
    if (_.isString(value)) {
      this.newPoster.startTime = value;
    }
  }

  /**
   * This function is triggered when the users pick/change the time
   * inside <app-time-picker>.
   * @param value new time value entered by the user
   */
  onEndTimeChanged(value) {
    if (_.isString(value)) {
      this.newPoster.endTime = value;
    }
  }
}
