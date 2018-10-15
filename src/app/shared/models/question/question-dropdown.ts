import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {

  /**
   * This field is used to render the <select> tag
   */
  controlType = 'dropdown';

  /**
   * This field is used to render the <option> tag
   */
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
