import { PosterService } from '../../services/poster.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Poster } from '../../models/poster';

import { convertDateTimeToNumber, convertNumberToDateTime } from '../../../../shared/util/date-time-convertor';
import * as _ from 'lodash';

@Component({
  selector: 'app-poster-update',
  templateUrl: './poster-update.component.html',
  styleUrls: ['./poster-update.component.css']
})
export class PosterUpdateComponent implements OnInit {

  @Input() poster: Poster;

  originalPoster: any;

  categories: string[];

  dateStr: string;
  startTimeStr: string;
  endTimeStr: string;

  constructor(private activeModal: NgbActiveModal,
              private posterService: PosterService) {}

  ngOnInit() {
    this.posterService.getById(this.poster._id).subscribe((response) => {
      const startTimeObj = convertNumberToDateTime(parseInt(response.startTime, 10));
      const endTimeObj = convertNumberToDateTime(parseInt(response.endTime, 10));
      this.dateStr = startTimeObj.dateStr;
      this.startTimeStr = startTimeObj.timeStr;
      this.endTimeStr = endTimeObj.timeStr;
    });
    this.originalPoster = {
      title: this.poster.title,
      description: this.poster.description,
      category: this.poster.category
    };
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
  updatePoster(posterForm) {
    const date = posterForm.value.date;
    this.poster.startTime = _.toString(convertDateTimeToNumber(date, this.startTimeStr));
    this.poster.endTime = _.toString(convertDateTimeToNumber(date, this.endTimeStr));
    this.posterService.update(this.poster).subscribe((result) => {
      if (result) {
        this.activeModal.close('Update');
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
      this.startTimeStr = value;
    }
  }

  /**
   * This function is triggered when the users pick/change the time
   * inside <app-time-picker>.
   * @param value new time value entered by the user
   */
  onEndTimeChanged(value) {
    if (_.isString(value)) {
      this.endTimeStr = value;
    }
  }

  cancel() {
    this.poster.title = this.originalPoster.title;
    this.poster.description = this.originalPoster.description;
    this.poster.category = this.originalPoster.category;
    this.activeModal.dismiss();
  }

}
