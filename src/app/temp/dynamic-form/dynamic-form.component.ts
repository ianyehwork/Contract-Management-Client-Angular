import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './../../shared/models/question/question-base';
import { QuestionService } from './../question.service';
import { QuestionControlService } from './../../shared/services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
/**
 * This class is the sample component form Angular.io
 */
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qs: QuestionService,
              private qcs: QuestionControlService) { }

  ngOnInit() {
    this.questions = this.qs.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
