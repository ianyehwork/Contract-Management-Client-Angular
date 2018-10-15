import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

import { forEach } from 'lodash';
import { CheckBoxQuestion } from './../models/question/question-checkbox';
import { RadioQuestion } from './../models/question/question-radio';
import { QuestionBase } from './../models/question/question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  /**
   * This functioned is used to convert an array of QuestionBase instances into
   * FormGroup instance.
   * @param questions An array of QuestionBase instances
   * @returns A FormGroup instance
   */
  toFormGroup(questions: QuestionBase<any>[] ): FormGroup{
    const group: any = {};

    questions.forEach(question => {
      if (question instanceof RadioQuestion) {
        group[question.key] = question.required ? new FormGroup({}, this.radioValueIsNotNullValidator) : new FormGroup({});
        question.values.forEach(value => {
          (group[question.key] as FormGroup).addControl('value', new FormControl(question.value));
        });
      } else if (question instanceof CheckBoxQuestion) {
        group[question.key] = question.required ? new FormGroup({}, this.checkboxContainTrueValidator) : new FormGroup({});
        question.values.forEach(value => {
          (group[question.key] as FormGroup).addControl(value, new FormControl(question.value.indexOf(value) >= 0 ? true : false));
        });
      } else {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
      }
    });
    return new FormGroup(group);
  }

  /**
   * This function is used when RadioQuestion.required = true
   * @param control AbstractControl
   */
  radioValueIsNotNullValidator(control: AbstractControl): ValidationErrors | null {
    if(control.value.value === null) {
      return {radioValueIsNotNullValidator: true};
    }
    return null;
  }
  
   /**
   * This function is used when CheckBoxQuestion.required = true
   * @param control AbstractControl
   */
  checkboxContainTrueValidator(control: AbstractControl): ValidationErrors | null {
    let containTrue = false;
    forEach(control.value, function(value, key) {
      if(control.value[key]) {
        containTrue = true;
      }
    })
    
    return containTrue ? null : {checkboxContainTrueValidator: true};
  }
}
