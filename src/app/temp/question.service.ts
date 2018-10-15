import { Injectable } from '@angular/core';

import { TextAreaQuestion } from './../shared/models/question/question-textarea';
import { CheckBoxQuestion } from './../shared/models/question/question-checkbox';
import { DropdownQuestion } from './../shared/models/question/question-dropdown';
import { RadioQuestion } from './../shared/models/question/question-radio';
import { TextboxQuestion } from './../shared/models/question/question-textbox';
import { QuestionBase } from './../shared/models/question/question-base';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'phoneNumber',
        label: 'Phone Number',
        value: '(919)-xxx-xxxx',
        required: true,
        order: 1
      }),
      new CheckBoxQuestion({
        key: 'hearFromUs',
        label: 'How do you hear from us?',
        value: ['Advertisement'],
        values: ['Advertisement', 'Friend Recommendation'],
        required: true,
        order: 2
      }),
      new RadioQuestion({
        key: 'donor',
        label: 'Are you interested in being a donor?',
        value: 'Yes',
        values: ['Yes', 'No', 'Not Sure'],
        required: true,
        order: 3
      }),
      new DropdownQuestion({
        key: 'program',
        label: 'Which program are you interested in?',
        value: 'primary',
        required: true,
        options: [
          {key: 'primary',  value: 'Primary'},
          {key: 'toddler',  value: 'Toddler'},
          {key: 'elementary',   value: 'Elementary'},
          {key: 'middleschool', value: 'Middle School'}
        ],
        order: 4
      }),
      new TextboxQuestion({
        key: 'financialDocument',
        label: 'Financial Proof Document',
        type: 'file',
        order: 5
      }),
      new TextAreaQuestion({
        key: 'essay',
        label: 'Essay',
        value: 'This is my essay...',
        required: true,
        order: 6
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
